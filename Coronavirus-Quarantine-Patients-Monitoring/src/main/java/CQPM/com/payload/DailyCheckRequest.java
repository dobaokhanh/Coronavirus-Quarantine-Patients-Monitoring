package CQPM.com.payload;

import java.io.Serializable;
import java.util.List;

import CQPM.com.entity.DailyCheck;

/**
 * @author Do Bao Khanh
 *
 */
public class DailyCheckRequest implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
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
