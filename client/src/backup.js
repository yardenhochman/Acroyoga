
const mapStateToProps = state => {
  const { view: { loaded, mode, filterValue, filter }, user: { name: userName, lists } } = state;
  return { loaded, mode, userName, lists, filter, filterValue };
};
