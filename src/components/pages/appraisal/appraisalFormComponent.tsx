import { useState } from "react"
//Material Components
import { Box, Grid } from "@mui/material"
import { Add, Close } from "@mui/icons-material"
//Styles
import {
  AppendForm,
  Button,
  ActionButtonRow,
  FormControl,
  FormFileUpload,
  FormLabel,
  FormRadioRow,
  FormLabelRow,
  IconButton,
  LevelMindMap,
  PageCard,
  PageContent,
  PageHeader,
  PageSubtitle,
  StaticTable,
  ButtonRow,
} from "../../../assets/styles"
//Type Interface
import { IChangeEvent } from "../../../interface"
//Components
import FormInputComponent from "../../form/formInputComponent"
import FormDatePickerComponent from "../../form/formDatePickerComponent"
import FormToggleComponent from "../../form/formToggleComponent"
import FormRadioComponent from "../../form/formRadioComponent"
import FormAutoCompleteComponent from "../../form/formAutoCompleteComponent"
import FormMultiSelectComponent from "../../form/formMultiSelectComponent"
import FormCheckBoxComponent from "../../form/formCheckBoxComponent"
//Resources
import { applicable, levelOptions, multiSelectOptions, options } from "../../../resources"
import Tooltip from "../../../templates/tooltip"
import DropdownMenu from "../../../templates/dropdownMenu"

export default function AppraisalFormComponent() {
  const [startDate, setStartDate] = useState<Date | null>(null)

  const changeHandler = (e: IChangeEvent, values?: {}) => {
    console.log(e, values)
  }

  return (
    <>
      <PageHeader>
        <div className="left_sec">
          <h3 className="page_title">Add Appraisal Cycle</h3>
        </div>
      </PageHeader>

      <PageContent>
        <PageCard mb={2}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Name of the Appraisal <span className="required">*</span>
                </FormLabel>
                <FormInputComponent type="text" name="appraisal" value="" onChange={changeHandler} required />
              </FormControl>
            </Grid>

            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Appraisal Cycle Period <span className="required">*</span>
                  <Tooltip
                    content="Period for which the appraisee is to be evaluated."
                    infoIcon
                    placement="right"
                  />
                </FormLabel>

                <FormDatePickerComponent
                  name="appraisal_cycle_period"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <FormInputComponent type="textarea" name="description" value="" onChange={changeHandler} />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Guideline Document
                  <Tooltip content="Max size is 5 MB" placement="right" infoIcon />
                </FormLabel>

                <FormFileUpload>
                  <input type="file" />
                </FormFileUpload>
              </FormControl>
            </Grid>
          </Grid>

          <PageSubtitle mt={3}>
            <h4>Appraisal Process Configuration Details</h4>
          </PageSubtitle>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Process Period <span className="required">*</span>
                  <Tooltip
                    content="Period in which the appraisal process is conducted for the given appraisal cycle."
                    infoIcon
                    placement="right"
                  />
                </FormLabel>
                <FormDatePickerComponent
                  name="process_period"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </FormControl>
            </Grid>

            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Review Period <span className="required">*</span>
                  <Tooltip
                    content="Period in which the reviewers evaluate the performance of their sub-ordinates/appraisee."
                    placement="right"
                    infoIcon
                  />
                </FormLabel>
                <FormDatePickerComponent
                  name="review_period"
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container mt={3}>
            <Grid item lg={4}>
              <FormLabelRow className="mb_0">
                <FormToggleComponent onChange={changeHandler} name="multi_rater" id="multi_rater" />
                <FormLabel htmlFor="multi_rater">Enable | Multi-Rater Feedback</FormLabel>
              </FormLabelRow>
            </Grid>

            <Grid item lg={4}>
              <FormLabelRow className="mb_0">
                <FormToggleComponent onChange={changeHandler} name="salary_hike" id="salary_hike" />
                <FormLabel htmlFor="salary_hike">Enable | Salary Hike</FormLabel>
              </FormLabelRow>
            </Grid>

            <Grid item lg={4}>
              <FormLabelRow className="mb_0">
                <FormToggleComponent onChange={changeHandler} name="self_appraisal" id="self_appraisal" />
                <FormLabel htmlFor="self_appraisal">Enable | Self Appraisal</FormLabel>
              </FormLabelRow>
            </Grid>
          </Grid>
        </PageCard>

        <PageCard mb={2}>
          <PageSubtitle>
            <h4>Module(s) to be included</h4>
          </PageSubtitle>

          <StaticTable>
            <thead>
              <tr>
                <th>Module(s)</th>
                <th>Goals</th>
                <th>KRA</th>
                <th>Competency</th>
                <th>Review Questions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Reviewer</td>
                <td>
                  <FormToggleComponent onChange={changeHandler} name="goals" />
                </td>
                <td>
                  <FormToggleComponent onChange={changeHandler} name="kra" />
                </td>
                <td>
                  <FormToggleComponent onChange={changeHandler} name="competency" />
                </td>
                <td>
                  <FormToggleComponent onChange={changeHandler} name="review_questions" />
                </td>
              </tr>
            </tbody>
          </StaticTable>
        </PageCard>

        <PageCard mb={2}>
          <PageSubtitle>
            <h4>Applicable For</h4>
          </PageSubtitle>

          <Grid container justifyContent="center">
            <Grid item lg={6}>
              <FormControl display="flex" alignItems="center">
                <FormLabel className="mb_0">Date of Joining</FormLabel>

                <FormRadioRow ml={5}>
                  <FormRadioComponent label="Until" name="date_of_joining" onChange={changeHandler} />

                  <FormRadioComponent label="From & To" name="date_of_joining" onChange={changeHandler} />

                  <FormRadioComponent label="Months" name="date_of_joining" onChange={changeHandler} />
                </FormRadioRow>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3} mb={3} justifyContent="center">
            <Grid item lg={6}>
              <FormControl>
                <FormDatePickerComponent
                  name="date_of_joining_until"
                  onChange={(date: Date) => setStartDate(date)}
                  selected={startDate}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3} mb={1} justifyContent="center">
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>Employee Type</FormLabel>
                <FormMultiSelectComponent
                  value={[]}
                  onChange={changeHandler}
                  name="employee_type"
                  options={multiSelectOptions}
                  placeholder="All Employee Types"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Designation</FormLabel>
                <FormMultiSelectComponent
                  value={[]}
                  onChange={changeHandler}
                  name="designation"
                  options={multiSelectOptions}
                  placeholder="All Designations"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Location</FormLabel>
                <FormMultiSelectComponent
                  value={[]}
                  onChange={changeHandler}
                  name="location"
                  options={multiSelectOptions}
                  placeholder="All Locations"
                  action={1}
                />
              </FormControl>
              <Box display="flex" justifyContent="flex-end">
                <DropdownMenu
                  content={
                    <>
                      <Add className="icon" /> Add
                    </>
                  }
                  buttonProps={{
                    $variant: "smooth",
                    $icon: "left",
                    $size: "medium",
                  }}
                  options={applicable}
                />
              </Box>
            </Grid>
          </Grid>
        </PageCard>

        <PageCard mb={2}>
          <PageSubtitle>
            <h4>Rating</h4>
          </PageSubtitle>

          <Grid container spacing={3}>
            <Grid item lg={3}>
              <FormControl className="mb_0">
                <FormInputComponent
                  type="text"
                  name="add_rating"
                  value="Outstanding"
                  onChange={changeHandler}
                  action={3}
                />
              </FormControl>
            </Grid>

            <Grid item lg={3}>
              <FormControl className="mb_0">
                <FormInputComponent
                  type="text"
                  name="add_rating"
                  value="Excellent"
                  onChange={changeHandler}
                  action={3}
                />
              </FormControl>
            </Grid>

            <Grid item lg={3}>
              <FormControl className="mb_0">
                <FormInputComponent
                  type="text"
                  name="add_rating"
                  value="Satisfactory"
                  onChange={changeHandler}
                  action={3}
                />
              </FormControl>
            </Grid>

            <Grid item lg={3}>
              <FormControl className="mb_0">
                <FormInputComponent
                  type="text"
                  name="add_rating"
                  value="Need Improvement"
                  onChange={changeHandler}
                  action={3}
                />
              </FormControl>
            </Grid>

            <Grid item lg={3}>
              <FormControl className="mb_0">
                <FormInputComponent
                  type="text"
                  name="add_rating"
                  value="Unsatisfactory"
                  onChange={changeHandler}
                  action={3}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end">
            <Button $variant="smooth" $icon="left" $size="medium">
              <Add className="icon" /> Add Rating
            </Button>
          </Box>
        </PageCard>

        <PageCard mb={2}>
          <PageSubtitle>
            <h4>Reviewers</h4>
          </PageSubtitle>

          <AppendForm>
            <FormControl>
              <Grid container columnSpacing={3} alignItems="center">
                <Grid item lg>
                  <FormAutoCompleteComponent
                    onChange={changeHandler}
                    name="designation"
                    placeholder="Reporting To"
                    options={options}
                  />
                </Grid>

                <Grid item lg>
                  <FormAutoCompleteComponent
                    onChange={changeHandler}
                    name="designation"
                    value={levelOptions[0]}
                    options={levelOptions}
                  />
                </Grid>

                <Grid item lg={1.5} display="flex" justifyContent="flex-start">
                  <ActionButtonRow>
                    <IconButton $variant="primary">
                      <Add />
                    </IconButton>
                    <IconButton $variant="danger">
                      <Close />
                    </IconButton>
                  </ActionButtonRow>
                </Grid>
              </Grid>
            </FormControl>
          </AppendForm>

          <LevelMindMap mt={4}>
            <ul>
              <li>
                <span>1 Level(s) of Reporting To</span>
              </li>
              <li>
                <span>Appraiser Choosen by Last Level reviewer</span>
              </li>
            </ul>
          </LevelMindMap>
        </PageCard>

        <PageCard mb={2}>
          <PageSubtitle>
            <h4>Review Approval Configurations</h4>
          </PageSubtitle>
          <FormControl display="flex" alignItems="center" mb={5}>
            <FormLabel className="mb_0">Review Approval</FormLabel>

            <FormLabelRow mb={0} ml={5}>
              <FormToggleComponent onChange={changeHandler} name="enable" id="enable" />
              <FormLabel htmlFor="enable">Enable</FormLabel>
            </FormLabelRow>
          </FormControl>

          <PageSubtitle>
            <h4>Publish Configuration</h4>
          </PageSubtitle>

          <FormControl display="flex" alignItems="center">
            <FormLabel className="mb_0">Publish Method</FormLabel>

            <FormRadioRow ml={5}>
              <FormRadioComponent label="Publish Manually" name="published_method" onChange={changeHandler} />

              <FormRadioComponent label="Publish Automatically" name="published_method" onChange={changeHandler} />
            </FormRadioRow>
          </FormControl>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Manual Publish Period
                  <Tooltip
                    content="If date range is configured, review can be published within that period. Review can be published anytime if range is not specified"
                    placement="right"
                    infoIcon
                  />
                </FormLabel>

                <FormDatePickerComponent
                  name="manual_publish_period"
                  onChange={(date: Date) => setStartDate(date)}
                  selected={startDate}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item lg={6}>
              <FormControl>
                <FormLabel>Field to be Published</FormLabel>

                <FormMultiSelectComponent
                  value={[multiSelectOptions[0], multiSelectOptions[1]]}
                  onChange={changeHandler}
                  name="field_to_be_published"
                  options={multiSelectOptions}
                />
              </FormControl>
            </Grid>

            <Grid item lg={6}>
              <FormControl>
                <FormLabel>
                  Publisher(s)
                  <Tooltip
                    content="Admin will be able to publish for all appraisee by default"
                    placement="right"
                    infoIcon
                  />
                </FormLabel>

                <FormMultiSelectComponent
                  value={[multiSelectOptions[2], multiSelectOptions[3], multiSelectOptions[4]]}
                  onChange={changeHandler}
                  name="field_to_be_published"
                  options={multiSelectOptions}
                  disableValue={multiSelectOptions[2].id}
                />
              </FormControl>
            </Grid>
          </Grid>
        </PageCard>

        <PageCard>
          <Grid container alignItems="center">
            <Grid item lg={6}>
              <FormLabelRow mb={0}>
                <FormCheckBoxComponent name="allow_to_share" onChange={changeHandler} id="allow_to_share" />
                <FormLabel htmlFor="allow_to_share">Allow Employee to Share Appraisal Feedback</FormLabel>
              </FormLabelRow>
            </Grid>

            <Grid item lg={6}>
              <ButtonRow justifyContent="flex-end" mt={0}>
                <Button $variant="reflex_secondary" $size="medium">
                  Submit
                </Button>
                <Button $variant="raised" $size="medium">
                  Cancel
                </Button>
              </ButtonRow>
            </Grid>
          </Grid>
        </PageCard>
      </PageContent>
    </>
  )
}
