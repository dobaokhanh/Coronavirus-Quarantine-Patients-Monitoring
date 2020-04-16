package com.cqpm.security;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

/**
 * @author Do Bao Khanh
 *
 */
@Component
public class JwtTokenProvider {
	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

	@Value("${app.jwtSecret}")
	private String jwtSecret;

	@Value("${app.jwtExpirationInMins}")
	private int jwtExpirationInMins;

	/**
	 * Generate Jwt token using HS512 Algorithm
	 * 
	 * @param authentication
	 * @return token
	 */
	public String generateToken(Authentication authentication) {
		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

		Date now = new Date();

		Date expiryDate = new Date(now.getTime() + jwtExpirationInMins);

		return Jwts.builder().setSubject(Long.toString(userPrincipal.getId())).setIssuedAt(new Date())
				.setExpiration(expiryDate).signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
	}

	/**
	 * Get user id from jwt token
	 * 
	 * @param token
	 * @return userId
	 */
	public Long getUserIdFromJWT(String token) {
		Claims claim = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
		return Long.parseLong(claim.getSubject());
	}

	/**
	 * Validate token
	 * 
	 * @param authToken
	 * @return true if token is valid, otherwise return false
	 */
	public boolean validateToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException e) {
			logger.error("Invalid JWT signature");
		} catch (MalformedJwtException e) {
			logger.error("Invalid JWT token");
		} catch (ExpiredJwtException e) {
			logger.error("Expired JWT token");
		} catch (UnsupportedJwtException e) {
			logger.error("Unsupported JWT token");
		} catch (IllegalArgumentException e) {
			logger.error("JWT claims empty string");
		}
		return false;
	}
}
