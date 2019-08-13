
export enum NAVIGATOR_STATUS {
  NOT_STARTED = 'NOT_STARTED',
  PENDING     = 'PENDING',
  SKIPPED     = 'SKIPPED',
  COMPLETE    = 'COMPLETE',
  CLAIMED     = 'CLAIMED'
}

export enum TASK_TYPE {
  CONTENT              = 'CONTENT',
  QUESTIONNAIRE        = 'QUESTIONNAIRE',
  QUIZ                 = 'QUIZ',
  BGOCCUPATIONANALYSIS = 'BGOCCUPATIONANALYSIS'
}

export class UserNavigatorStatus {// extends BaseEntityWithModified {
  // user?: User;
  startedAt: string;
  skippedAt: string;
  completedAt: string;
  claimedAt: string;
  status: NAVIGATOR_STATUS;
  storage: any;
}

export class NavigatorJourney {// extends BaseEntityWithModified {
  friendlyId?: string;
  title?: string;
  description?: string;
  excerpt?: string;
  priority?: number;

  icon?: string;
  backgroundImage?: string;
  backgroundSky?: string;
  foregroundSky?: string;

  stageGroups?: NavigatorStageGroup[];

  userStatus?: UserNavigatorStatus;
}

export class NavigatorStageGroup{// extends BaseEntityWithModified {
  friendlyId?: string;
  title?: string;
  // description?: string;
  excerpt?: string;
  priority?: number;

  journey?: NavigatorJourney;
  stages?: NavigatorStage[];

  userStatus?: UserNavigatorStatus;
}

export class NavigatorStage {// extends BaseEntityWithModified {
  friendlyId?: string;
  title?: string;
  description?: string;
  priority?: number;

  journey?: NavigatorJourney;
  stageGroup?: NavigatorStageGroup;
  tasks?: NavigatorTask[];

  userStatus?: UserNavigatorStatus;
}

export class NavigatorTask {// extends BaseEntityWithModified {
  friendlyId?: string;
  title?: string;
  excerpt?: string;
  priority?: number;

  required?: boolean;
  duration?: number;
  type?: TASK_TYPE;
  config?: ContentTaskConfig | QuestionnaireTaskConfig | QuizTaskConfig; // Configuration for the component loaded based on type

  journey?: NavigatorJourney;
  stageGroup?: NavigatorStageGroup;
  stage?: NavigatorStage;

  userStatus?: UserNavigatorStatus;
}

export class EiSelectOption {
  id?: string; // Used to uniquely identity question object from DOM
  text: string;
  value: any;
  class?: string;
  icon?: string;
}
export class EiFieldLoaderConfig{ // actually from EiFieldLoaderConfig
  type: string;
  title?: string;
  description?: string;
  options?: EiSelectOption[];
}
export class QuestionnaireTaskConfig extends EiFieldLoaderConfig { }
export class QuizTaskConfig extends EiFieldLoaderConfig { }
export class QuestionnaireQuestion extends EiFieldLoaderConfig {
  key: string | string[]; // Deep key into answers object to save answer for question
}

export class ContentTaskConfig {
  pages: ContentTaskPageConfig[];
}

export enum CONTENT_SUB_TYPES {
  BLURB    = 'BLURB',
  FRAME    = 'FRAME',
  EXTERNAL = 'EXTERNAL',
  TRIVIA   = 'TRIVIA'
}

export class ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES;
  // url?: string;
  // content?: string;
  // question?: QuestionnaireQuestion;
}

class Frame extends ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES.FRAME
  url: string
}
class External extends ContentTaskPageConfig { // potential for validating further
  type: CONTENT_SUB_TYPES.EXTERNAL
  url: string
  content: string
}
class Trivia extends ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES.TRIVIA
  url?: string
  content: string
  question: QuestionnaireQuestion
}
