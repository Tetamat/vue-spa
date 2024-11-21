const taskTemplate = {
  tId: 0,
  title: '',
  availableOps: [],
  current: 0,
  records: []
}

// create new record based on the template

export function createRecord(id, title, availableOps, current, records) {
  const newRecord = Object.assign({}, taskTemplate);
  newRecord.tId = id;
  newRecord.title = title;
  newRecord.availableOps = availableOps;
  newRecord.current = current;
  newRecord.records = records;
  return newRecord;
}

export function convertToJSON(data) {
  return JSON.stringify(data);
}

export function taskStatus() {
  console.log("todo: extract tasks and compare start and end dates");
  return 0;
}

export function getTaskStatus(data) {
  return data.records.filter((r) => r.opId === data.current);
}
