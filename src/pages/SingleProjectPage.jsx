import { useParams } from "react-router-dom";
import SingleProjectGreatBear from "./SingleProjectGreatBear";
import SingleProjectTales from "./SingleProjectTales";

function SingleProjectPage() {
  let { projectId } = useParams();

  switch (projectId) {
    case "great-bear":
      return <SingleProjectGreatBear />;
    case "tales-from-north":
      return <SingleProjectTales />;

    // case "another-project-id":
    // return <AnotherProjectComponent />;
    // ... other cases for the projects
    default:
      return <div>Project not found</div>; // Or generic not found component
  }
}

export default SingleProjectPage;
