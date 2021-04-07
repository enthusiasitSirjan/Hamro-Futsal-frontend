export var url = "http://127.0.0.1:8000/";
if (window.location.hostname === "localhost") {
  url = "http://127.0.0.1:8000/";
}

//USER-LOGIN API::
export const UserLoginLink = `${url}account/login/`;
export const UserRegisterLink = `${url}account/register/`;
export const UserChangePasswordLink = `${url}account/change_password/`;
export const UserForgetPasswordLink = `${url}account/forgot_password/`;
export const ForgotPasswordCheckPin = `${url}account/forgot_password/check/`;
export const ChangeForgetPasswordLink = `${url}account/forgot_password/change/`;
export const VerifyLink = `${url}account/verify_email/`;
export const AllUserAccounts = `${url}account/all_users/`;
export const AllFutsalOwnerAccounts = `${url}account/all_futsal_owners/`;

// USER DELETE
export const UserAccountDelete = `${url}account/deleteUser/`;
export const OwnerAccountDelete = `${url}account/deleteOwner/`;

//Edit - User_Profile :::
export const UserProfileLink = `${url}account/edit_user/`;

// FUTSAL
export const CreateFutsalLink = `${url}futsal/create_futsal/`;
export const BookFutsalLink = `${url}futsal/booking_futsal/`;
export const AllFutsalLink = `${url}futsal/all_futsal/`;
export const EditFutsalLink = `${url}futsal/edit_futsal/`;
export const ShowMyBookingsLink = `${url}futsal/bookings/`;
export const FutsalDetailsLink = `${url}futsal/`;
export const MyBookingsLink = `${url}futsal/my_booking/`;
export const FutsalRateLink = `${url}futsal/futsal_rate/`;
export const MyFutsalLink = `${url}futsal/my_futsal/`;

// Trainings
export const AddTrainingsLink = `${url}futsal/add_training/`;
export const ShowAllTrainingsLink = `${url}futsal/all_trainings/`;

// Membership
export const BecomeMemberLink = `${url}futsal/become_member/`;
export const ShowMembersLink = `${url}futsal/members/`;

//Tournaments
export const AddTournamentLinks = `${url}futsal/add_tournaments/`;
export const ShowAllTournamentsLink = `${url}futsal/all_tournaments/`;

// MemberStat
export const MemberStatLinks = `${url}futsal/member_stat/`;

// BookingStat
export const BookingStatLinks = `${url}futsal/booking_stat/`;

// AdminStats
export const AllBookingStats = `${url}futsal/allbooking/stat/`;
export const AllUserCount = `${url}futsal/total_stat/`;

// Membership Status
export const MembersStatusLink = `${url}futsal/membership/`;

// Booking Status
export const BookStatusLink = `${url}futsal/booking/`;

// Admin Booking
export const AdminBookingLink = `${url}futsal/all_booking/`;
