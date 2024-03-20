//Images
import goals from "./../assets/img/modules/goals.svg"
import feedback from "./../assets/img/modules/feedback.svg"
import summary from "./../assets/img/modules/summary.svg"
import skill_set from "./../assets/img/modules/skill_set.svg"
import kra from "./../assets/img/modules/kra.svg"
import kra_vs_goals from "./../assets/img/modules/goals.svg"
import competency from "./../assets/img/modules/competency.svg"
import salary from "./../assets/img/modules/salary.svg"

export const levelOptions = [
  {
    id: 1,
    name: "Single level",
  },
  {
    id: 2,
    name: "Two levels",
  },
  {
    id: 3,
    name: "Three levels",
  },
  {
    id: 4,
    name: "Four levels",
  },
  {
    id: 5,
    name: "Five levels",
  },
  {
    id: 6,
    name: "Six levels",
  },
  {
    id: 7,
    name: "Seven levels",
  },
  {
    id: 8,
    name: "Eight levels",
  },
  {
    id: 9,
    name: "Nine levels",
  },
  {
    id: 10,
    name: "Ten levels",
  },
];
export const options = [
  {
    id: 1,
    name: "Permanent Employee",
  },
  {
    id: 2,
    name: "Direct payroll",
  },
];
export const multiSelectOptions = [
  {
    id: 1,
    name: "Rating",
  },
  {
    id: 2,
    name: "Hike",
  },
  {
    id: 3,
    name: "Admin",
  },
  {
    id: 4,
    name: "Reporting Manager",
  },
  {
    id: 5,
    name: "Final Reviewer",
  },
];
export const applicable = [
  {
    label: "Location",
    value: "location",
  },
  {
    label: "Role",
    value: "role",
  },
  {
    label: "Department",
    value: "department",
  },
  {
    label: "Custom Date Field",
    value: "custom_date_field",
  },
  {
    label: "Total Work Experience",
    value: "total_work_experience",
  },
];
export const appraisalCycleData = [
  {
    id:1,
    cyclePeriod:"FY 2022/23",
    appraisalName:"2023 Annual Appraisal Cycle",
    createdBy:"Jay - HR Manager",
    createdOn:"21/02/2023 14:08:22 PM",
  },
  {
    id:2,
    cyclePeriod:"FY 2021/22",
    appraisalName:"2022 Annual Appraisal Cycle",
    createdBy:"Maheswari - HR Manager",
    createdOn:"21/02/2022 11:08:22 PM",
  },
  {
    id:3,
    cyclePeriod:"FY 2020/21",
    appraisalName:"2021 Annual Appraisal Cycle",
    createdBy:"Maheswari - HR Manager",
    createdOn:"19/02/2021 16:08:22 PM",
  }
] 
export const preformanceModules = [
  {
    label:"Goals",
    name:"goals",
    displayName:"Goals",
    status:true,
    icon:goals
  },
  {
    label:"Feedback",
    name:"feedback",
    displayName:"Feedback",
    status:true,
    icon:feedback
  },
  {
    label:"Summary",
    name:"summary",
    displayName:"Summary",
    status:true,
    icon:summary
  },
  {
    label:"Skill Set",
    name:"skill_set",
    displayName:"Skill Set",
    status:true,
    icon:skill_set
  },
  {
    label:"KRA",
    name:"kra",
    displayName:"KRA",
    status:true,
    icon:kra
  },
  {
    label:"KRA vs Goals",
    name:"kra_vs_goals",
    displayName:"KRA vs Goals",
    status:false,
    icon:kra_vs_goals
  },
  {
    label:"Competency",
    name:"competency",
    displayName:"Competency",
    status:true,
    icon:competency
  },
  {
    label:"Salary",
    name:"salary",
    displayName:"Salary",
    status:true,
    icon:salary
  }
]