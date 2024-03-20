import {
  ModuleAction,
  ModuleCard,
  ModuleHeader,
  ModuleInputField,
  ModuleName,
  PageContent,
  PageHeader,
} from "../../assets/styles"
import { IChangeEvent, IPreformanceModule } from "../../interface"
import { preformanceModules } from "../../resources"
import FormInputEnableComponent from "../form/formInputEnableComponent"
import FormToggleComponent from "../form/formToggleComponent"

export default function PerformanceModulesComponent() {
  const changeHandler = (e: IChangeEvent) => {
    console.log(e)
  }

  return (
    <>
      <PageHeader>
        <div className="left_sec">
          <h3 className="page_title">Performance Modules</h3>
        </div>
      </PageHeader>

      <PageContent>
        <ModuleHeader>
          <ModuleName>
            <h3>Module Name</h3>
          </ModuleName>

          <ModuleInputField>
            <h3>Module Display Name</h3>
          </ModuleInputField>

          <ModuleAction></ModuleAction>
        </ModuleHeader>

        {preformanceModules.map((item: IPreformanceModule, i: number) => {
          return (
            <ModuleCard key={i}>
              <ModuleName>
                <div className="icon">
                  <img src={item.icon} alt={item.label} />
                </div>

                <div className="name">{item.label}</div>
              </ModuleName>

              <ModuleInputField>
                <FormInputEnableComponent
                  value={item.displayName}
                  name={item.name}
                  type="text"
                  onChange={changeHandler}
                />
              </ModuleInputField>

              <ModuleAction>
                <FormToggleComponent name={item.name} checked={item.status} onChange={changeHandler} />
              </ModuleAction>
            </ModuleCard>
          )
        })}
      </PageContent>
    </>
  )
}
