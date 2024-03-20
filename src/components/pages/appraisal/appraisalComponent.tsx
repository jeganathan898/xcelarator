import { Button, EmptyContent, ImgTag, PageCard, PageContent, PageHeader } from "../../../assets/styles"

import emptyImage from "../../../assets/img/empty_page.svg"
import { Add } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import { PAGE_URL } from "../../../resources/page_url"
import DataTable from "../../../templates/dataTable"

export default function AppraisalComponent() {
  const navigate = useNavigate()
  return (
    <>
      <PageHeader $size="large">
        <div className="left_sec">
          <h3 className="page_title">Appraisal Cycle</h3>
        </div>

        <div className="right_sec">
          <Button
            $variant="reflex_secondary"
            $icon="left"
            onClick={() => navigate(`${PAGE_URL.appraisal}${PAGE_URL.add_appraisal}`)}
          >
            <Add className="icon" />
            Add New
          </Button>
        </div>
      </PageHeader>

      {true ? (
        <PageContent $size="large">
          <PageCard p={0} pb={2}>
            <DataTable />
          </PageCard>
        </PageContent>
      ) : (
        <EmptyContent>
          <div className="content">
            <ImgTag className="image" $imgfit="contain" src={emptyImage} alt="Empty" />
            <p>No Appraisal Cycle Found Yet</p>
            <Button
              $variant="reflex_secondary"
              $icon="left"
              onClick={() => navigate(`${PAGE_URL.appraisal}${PAGE_URL.add_appraisal}`)}
            >
              <Add className="icon" />
              Create an Appraisal Cycle
            </Button>
          </div>
        </EmptyContent>
      )}
    </>
  )
}
