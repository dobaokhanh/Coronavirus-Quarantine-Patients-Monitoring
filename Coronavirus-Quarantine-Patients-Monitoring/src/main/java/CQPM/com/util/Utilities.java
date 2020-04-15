package CQPM.com.util;

import java.text.SimpleDateFormat;

import CQPM.com.exception.BadRequestException;

/**
 * @author Do Bao Khanh
 *
 */
public class Utilities {
	
	public static final SimpleDateFormat SDF = new SimpleDateFormat("dd/MM/YYYY");
	
	/**
	 * Validate the page number and size
	 * 
	 * @param page
	 * @param size
	 */
	public static void validatePageNumberAndSize(int page, int size) {
		if (page < 0) {
			throw new BadRequestException("Page number cannot be less than zero.");
		}

		if (size > AppConstants.MAX_PAGE_SIZE) {
			throw new BadRequestException("Page size cannot be greater than" + AppConstants.MAX_PAGE_SIZE);
		}
	}
}
