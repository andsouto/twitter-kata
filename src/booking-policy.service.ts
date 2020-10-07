export class BookingPolicyService {

	// Collaborators(?)

	setCompanyPolicy(companyId: unknown, roomTypes: unknown): void {

	}

	setEmployeePolicy(employeeId: unknown, roomTypes: unknown): void {

	}

	isBookingAllowed(employeeId: unknown, roomType: unknown): boolean {
		return false;
	}

}

// Company Booking Policy: Indicates which type of rooms can be booked.
// E.g. a company may only allow standard (single/double) rooms to be booked. Or it may allow standard and junior suite rooms.

// Employee Booking Policy: Indicates which type of rooms a specific employee can book.
// E.g. One employee might only be allowed to book a standard room while another employee may be allowed to book standard, junior suite and master suite.

// Business Rules
// - Employee policies take precedence over company policies. If there is a policy for an employee, the policy should be respected regardless of what the company policy (if any) says.
// - If an employee policy does not exist, the company policy should be checked.
// - If neither employee nor company policies exist, the employee should be allowed to book any room.

// Technical Rules
// - Methods setCompanyPolicy(...) and setEmployeePolicy(...) should create a new policy or update an existing one. No duplicate company or employee policies are allowed.
// - Method isBookingAllowed(...) should take into account the employee and the company the employee works for.
