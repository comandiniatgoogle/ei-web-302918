
const BigQueryTest = () => {
  const OATH2 =
    "ya29.c.b0AXv0zTPadkuDYMmNdBMse9bq1bZcZuSn7kIprymisytC7Y8K2HAPr30uYh4gcIwDRzia4MYNZV06u4VMw65pna6dkAAKMfm0My7IzzOFldU4ICmSEYQ_ZCT04ZFAOqeTkPZim4PszwRwXP_SnZNYB8ZFbUeIqY3lNZTzKVepSfU4dp8NBfmA7YjgHIX24VziCeq0FqItwel5Hl_aNb7aJmsZrdBZYAA";
  const urlTest =
    "https://bigquery.googleapis.com/bigquery/v2/projects/228351284416/datasets/dayOffTool/tables/requestType/data";
  const urlTest2 =
    "https://bigquery.googleapis.com/bigquery/v2/projects/228351284416/datasets/nmc/tables/trackerTbl/data";

  const getColumns =
  "https://bigquery.googleapis.com/bigquery/v2/projects/228351284416/datasets/dayOffTool/tables/requestType";

  const oauth2 = {
    Authorization: "Bearer " + OATH2,
    Accept: "application/json",
  };

  const getDataFromBQ = () => {
    console.log("Reading data from BQ...");
    console.log("START: " + new Date().toISOString());
    fetch(getColumns, {
      method: "GET",
      headers: oauth2,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log("END: " + new Date().toISOString());
      });
  };

  return (
    <div>
      <button onClick={getDataFromBQ}>TEST BQ CONNECTION</button>
    </div>
  );
};

export default BigQueryTest;
