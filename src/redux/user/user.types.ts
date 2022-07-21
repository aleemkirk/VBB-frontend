import { Career } from '../careers/careers.types';
import { Language } from '../language/language.types';
import { Library } from '../library/library.types';
import { Subject } from '../subjects/subjects.types';

export const SET_USER = 'SET_USER';
export const GET_USER = 'GET_USER';

export interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}

export interface GetUserAction {
  type: typeof GET_USER;
}


export interface User {
  pk:number;
  email?: string;
  firstName: string;
  lastName: string;
  name: string;
  username?: string;
  role:number;
  timeZone: string;
  isEmailVerified: boolean;
  isLibrarian: boolean;
  isMentor: boolean;
  isStudent: boolean;
  profileImage?:string;
  dateOfBirth: string | null;
  mentorProfile?: MentorProfile;
  studentProfile?: StudentProfile;
  advisorProfile?: AdvisorProfile;
  librarianProfile?: LibrarianProfile;
}

export interface MentorProfile {
  assignedLibrary: Library;
  organization: any | null;
  careers: Career[];
  subjects: Subject[];
  hasCompletedTraining: boolean;
  interests: string;
  phoneNumber: string;
  secondaryEmail: string;
  completedRegistration: boolean;
  mentoringLanguages: Language[];
  approvalStatus: ApprovalStatus;
  isOnboarded:boolean;
}

export interface StudentProfile {
  assignedLibrary: Library;
  careersOfInterest: Career[];
  mentoringLanguages: Language[];
  subjects: Subject[];
  isOnboarded:boolean;
}


export interface AdvisorProfile {
  library: Library;
  bio:string;
}

export interface LibrarianProfile {
  library: Library;
  bio:string;
}

export interface AuthToken {
  access: string;
  refresh: string;
}

// Values are kept in backend
enum ApprovalStatus {
  APPROVED = 'Approved',
  NOT_REVIEWED = 'Not Reviewed',
  REJECTED = 'Rejected',
}

export type UserActions = SetUserAction;
