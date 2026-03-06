import md5 from 'md5';

export function encryptPassword(password) {
  return md5(password);
}

export function createOpID() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}:${now.getTime()}`;
}

export function logAction(operation, type, activeUser, operationID) {
  // This should be replaced with an API call to log actions in the backend
  // Example stub:
  console.log({
    logUsername: activeUser?.username,
    logDatetime: createOpID(),
    OpType: type,
    action: operation,
    operationID
  });
}
