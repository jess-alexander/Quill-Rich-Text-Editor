
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
  priority?: number;

  icon?: string;
  backgroundImage?: string;
  backgroundSky?: string;
  foregroundSky?: string;
  config?: NavigatorJourneyConfig;

  stageGroups?: NavigatorStageGroup[];

  userStatus?: UserNavigatorStatus;
}

export class NavigatorStageGroup{// extends BaseEntityWithModified {
  friendlyId?: string;
  title?: string;
  description?: string;
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
  // friendlyId?: string;
  title?: string;
  description?: string;
  priority?: number;

  required?: boolean;
  duration?: number;
  type?: TASK_TYPE;
  config?: ContentTaskConfig | QuestionnaireTaskConfig | QuizTaskConfig; // Configuration for the component loaded based on type

  // journey?: NavigatorJourney;
  // stageGroup?: NavigatorStageGroup;
  // stage?: NavigatorStage;

  journeyTitle?: string;
  stageGroupTitle?: string;
  stageTitle?: string;

  userStatus?: UserNavigatorStatus;
}

export class NavigatorJourneyConfig {
  questionnaire: QuestionnaireTaskConfig;
}

export class EiSelectOption {
  id?: string; // Used to uniquely identity question object from DOM
  text: string;
  value: any;
  class?: string;
  icon?: string;
  constructor(o:any){
    
  }
}
export class EiFieldLoaderConfig{ // actually from EiFieldLoaderConfig
  key: string; // MUST BE **unique within journey ** LOWERCSASE WITH DASHES
  type: string;
  title?: string;
  description?: string;
  options?: EiSelectOption[];
  constructor(q: any){

  }
}
export class QuestionnaireTaskConfig extends EiFieldLoaderConfig { }
export class QuizTaskConfig extends EiFieldLoaderConfig { }
export class QuestionnaireQuestion extends EiFieldLoaderConfig {
  key: string | string[]; // Deep key into answers object to save answer for question
}

export class ContentTaskConfig {
  pages: Array<ContentTaskPageConfig>;
}

export enum CONTENT_SUB_TYPES {
  BLURB    = 'BLURB',
  FRAME    = 'FRAME',
  EXTERNAL = 'EXTERNAL',
  TRIVIA   = 'TRIVIA'
}

export class ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES;
  url?: string;
  content?: string;
  question?: QuestionnaireQuestion;
  constructor(p: any){
    p.type = this.type;
    if(!!p.url)
      p.url = this.url;
    if(!!p.content)  
      p.content = this.content;
  }
}
// VALIDATION HAPPENING ON CONTENT COMPONENT
export class Content {//extends ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES.BLURB
  content: string;
  constructor(p: any){
    // super(p);
    p.type = this.type;
    p.content = this.content;
  }
}

export class Frame {//extends ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES.FRAME
  url: string
  constructor(p: any){
    // super(p);
    p.type = this.type;
    p.url = this.url;
  }
}

export class External{//} extends ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES.EXTERNAL
  url: string
  content: string
  constructor(p: any){
    // super(p);
    p.type = this.type;
    p.content = this.content;
    p.url = this.url;
  }
}
export class Trivia extends ContentTaskPageConfig {
  type: CONTENT_SUB_TYPES.TRIVIA
  url?: string
  content: string
  question: QuestionnaireQuestion
}
