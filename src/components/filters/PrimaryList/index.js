import Primary from "../Primary/index";
import {connect} from "react-redux";
import {getSecondaries} from "../../../redux/reducers/api/api.store";
import {bindActionCreators} from "redux";
import {Li, Ul} from "../../global/list/";

const React = require('react');

const PrimaryList = ({primaries, handlePrimaryClick}) => (
  <Ul flex>
    {primaries.map(primary => (
      <Li key={primary.id} ><Primary {...primary} onClick={handlePrimaryClick}/></Li>
    ))}
  </Ul>
);

const mapStateToProps = (state) => {
  return {
    primaries: state.filters.primaries
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handlePrimaryClick: id => bindActionCreators(getSecondaries(id), dispatch)
  }
};

export {PrimaryList, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(PrimaryList)
