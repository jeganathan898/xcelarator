export const performance = "/performance"
export const teammates = "/teammates"
export const settings = "/settings"
export const activities = "/activities"

export const PAGE_URL = {
  login:'/login',
  signup:'/signup',
  dashboard: "/dashboard",
  performance: performance,
  teammates: teammates,
  settings: settings,
  activities:activities,
  myReview: `${performance}/my_review`,
  peersView: `${performance}${teammates}/peers_view`,
  appraiseeView: `${performance}${teammates}/appraisee_View`,
  reviewExtension:`${performance}${activities}/review_extension`,
  appraisal: `${performance}${settings}/appraisal`,
  add_appraisal: `/add_appraisal`,
  performance_modules: `${performance}${settings}/performance_modules`,
  continuous_review: `${performance}${settings}/continuous_review`,
  notifications: `${performance}${settings}/notifications`,
  feedback: `${performance}${settings}/feedback`,
  skill_sets: `${performance}${settings}/skill_sets`,
  kra: `${performance}${settings}/kra`,
  competency: `${performance}${settings}/competency`,
  review_questions: `${performance}${settings}/review_questions`,
  potential: `${performance}${settings}/potential`,
  summary: `${performance}${settings}/summary`,
  performance_administrator: `${performance}${settings}/performance_administrator`,
  goals_settings: `${performance}${settings}/goals_settings`,
  general_settings: `${performance}${settings}/general_settings`,
  employee_salary:`${performance}/employee_salary`,
  goals:`${performance}/goals`,
  multi_rater_view:`${performance}/multi_rater_view`
}
