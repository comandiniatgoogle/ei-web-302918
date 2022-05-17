import EiWebApplicationTitle from "./EiWebApplicationTitle";
import EiWebGoogleLogo from "./EiWebGoogleLogo";
import "./EiWebHeader.css";
import EiWebUserLogo from "./EiWebUserLogo";

const EiWebHeader = () => {
  return (
    <table className="eiweb-header">
      <tr>
        <td width="10%">
          <EiWebGoogleLogo />
        </td>
        <td width="80%">
          <EiWebApplicationTitle />
        </td>
        <td width="10%">
          <EiWebUserLogo />
        </td>
      </tr>
    </table>
  );
};

export default EiWebHeader;
