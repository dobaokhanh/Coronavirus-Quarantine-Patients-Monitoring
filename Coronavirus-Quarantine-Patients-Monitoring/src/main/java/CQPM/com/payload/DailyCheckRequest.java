package CQPM.com.payload;

import java.io.Serializable;
import java.util.List;

import CQPM.com.entity.DailyCheck;

public class DailyCheckRequest implements Serializable{

	List<DailyCheck> dailyCheck;

	public DailyCheckRequest(List<DailyCheck> dailyCheck) {
		super();
		this.dailyCheck = dailyCheck;
	}

	public List<DailyCheck> getDailyCheck() {
		return dailyCheck;
	}

	public void setDailyCheck(List<DailyCheck> dailyCheck) {
		this.dailyCheck = dailyCheck;
	}

}
