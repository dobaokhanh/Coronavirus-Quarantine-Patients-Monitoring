package com.cqpm.controller;

import java.net.URI;
import java.util.Collections;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.cqpm.entity.Role;
import com.cqpm.entity.RoleName;
import com.cqpm.entity.User;
import com.cqpm.exception.AppException;
import com.cqpm.payload.ApiResponse;
import com.cqpm.payload.JwtAuthenticationResponse;
import com.cqpm.payload.LoginRequest;
import com.cqpm.payload.SignupRequest;
import com.cqpm.repository.RoleRepository;
import com.cqpm.repository.UserRepository;
import com.cqpm.security.JwtTokenProvider;

/**
 * @author Do Bao Khanh
 *
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	JwtTokenProvider jwtTokenProvider;

	@Autowired
	PasswordEncoder passwordEncoder;

	/**
	 * Authenticate user
	 * 
	 * @param loginRequest
	 * @return
	 */
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsernameOrEmail(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String jwt = jwtTokenProvider.generateToken(authentication);
		return ResponseEntity.ok(new JwtAuthenticationResponse(jwt));
	}

	/** Register user
	 * @param signupRequest
	 * @return
	 */
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
		if (userRepository.existsByUsername(signupRequest.getUsername())) {
			return new ResponseEntity(new ApiResponse(false, "Username is already taken !"), HttpStatus.BAD_REQUEST);
		}

		if (userRepository.existsByEmail(signupRequest.getEmail())) {
			return new ResponseEntity(new ApiResponse(false, "Email is already taken !"), HttpStatus.BAD_REQUEST);
		}

		// Creating user's account

		User user = new User(signupRequest.getName(), signupRequest.getUsername(), signupRequest.getEmail(),
				signupRequest.getPassword());

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
				.orElseThrow(() -> new AppException("User role is not set."));

		user.setRoles(Collections.singleton(userRole));

		User result = userRepository.save(user);

		URI location = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/users/{username}")
				.buildAndExpand(result.getUsername()).toUri();

		return ResponseEntity.created(location).body(new ApiResponse(true, "User registerd successfully !"));
	}
}
