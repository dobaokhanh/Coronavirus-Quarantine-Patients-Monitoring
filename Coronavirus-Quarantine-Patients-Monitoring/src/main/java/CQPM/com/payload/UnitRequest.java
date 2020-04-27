package CQPM.com.payload;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @author Do Bao Khanh
 *
 */
public class UnitRequest {

	@NotBlank
	@Size(max = 40)
	@Valid
	private String name;

	@NotBlank
	@Size(max = 100)
	@Valid
	private String addrress;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddrress() {
		return addrress;
	}

	public void setAddrress(String addrress) {
		this.addrress = addrress;
	}
}
