package CQPM.com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * @author Do Bao Khanh
 *
 */
@Entity
@Table(name = "daily_check")
public class DailyCheck {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@NotBlank
	@Column(name = "day_number")
	private String dayNumber;

	@NotNull
	@Column(name = "temperature")
	@Max(value = 45)
	@Min(value = 30)
	private Double temperature;

	@NotNull
	@Column(name = "cough")
	private Boolean cough;

	@NotNull
	@Column(name = "fever")
	private Boolean fever;

	@NotNull
	@Column(name = "exhausted")
	private Boolean exhausted;

	@NotNull
	@Column(name = "shortness_of_breath")
	private Boolean shortnessOfBreath;

	public DailyCheck() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
