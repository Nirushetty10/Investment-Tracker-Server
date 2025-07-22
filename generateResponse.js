export const createResponse = (type, message,id) => {
  const response = {
    DML_STATUS : type === 'success' ? 'S' : 'E',
    DML_MESSAGE : message,
  }
  if (id) {
    response.DML_ID = id;
  }
  return response;
}