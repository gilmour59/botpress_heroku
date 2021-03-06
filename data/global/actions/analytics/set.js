//CHECKSUM:9b0f883a55882ea9beee1359eda975db9d0a8831952f9ecd36d7105610c32026
const axios = require('axios')

/**
 * Sets the absolute value of a specific metric group.
 *
 * @title Set Custom Metric
 * @category Analytics
 * @param {string} metric The name of the metric
 * @param {string} [group=all] Optional group inside the metrics
 * @param {Number} [count=1] The absolute value to set
 */
const set = async (metric, group, count = 1) => {
  const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId, { localUrl: true })
  await axios.post(
    '/mod/analytics/custom_metrics/set',
    { name: `${metric}~${group}`, count: Number(count) },
    axiosConfig
  )
}

return set(args.metric, args.group, args.count)
