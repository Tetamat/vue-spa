const taskTemplate = {
  tId: 0,
  title: '',
  availableOps: [],
  current: 0,
  records: []
}

// create new record based on the template

export function createRecord(id, title, availableOps, current, records)  {
  const newRecord = Object.create(taskTemplate);
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

export taskStatus (tasks, opId, recordId) {

}
export function getTaskStatus(data) {
   data.records.filter((r) => r.opId == data.current);
}
