package CQPM.com.payload;

import java.io.Serializable;

/**
 * @author Do Bao Khanh
 *
 */
public class DailyCheckRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private String dayNumber;

	private Double temperature;

	private Boolean cough;

	private Boolean fever;

	private Boolean exhausted;

	private Boolean shortnessOfBreath;

	public DailyCheckRequest(String dayNumber, Double temperature, Boolean cough, Boolean fever, Boolean exhausted,
			Boolean shortnessOfBreath) {
		super();
		this.dayNumber = dayNumber;
		this.temperature = temperature;
		this.cough = cough;
		this.fever = fever;
		this.exhausted = exhausted;
		this.shortnessOfBreath = shortnessOfBreath;
	}

	public String getDayNumber() {
		return dayNumber;
	}

	public void setDayNumber(String dayNumber) {
		this.dayNumber = dayNumber;
	}

	public Double getTemperature() {
		return temperature;
	}

	public void setTemperature(Double temperature) {
		this.temperature = temperature;
	}

	public Boolean getCough() {
		return cough;
	}

	public void setCough(Boolean cough) {
		this.cough = cough;
	}

	public Boolean getFever() {
		return fever;
	}

	public void setFever(Boolean fever) {
		this.fever = fever;
	}

	public Boolean getExhausted() {
		return exhausted;
	}

	public void setExhausted(Boolean exhausted) {
		this.exhausted = exhausted;
	}

	public Boolean getShortnessOfBreath() {
		return shortnessOfBreath;
	}

	public void setShortnessOfBreath(Boolean shortnessOfBreath) {
		this.shortnessOfBreath = shortnessOfBreath;
	}

}
