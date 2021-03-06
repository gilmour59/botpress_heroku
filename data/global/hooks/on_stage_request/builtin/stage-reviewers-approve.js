//CHECKSUM:28f759baf8fe1e484edd5f660d2209fd6d919294ee92071882568d25389dc6a0
const stage = pipeline.find(x => x.id === bot.pipeline_status.current_stage.id)

if (stage.reviewers && stage.minimumApprovals > 0) {
  const request = bot.pipeline_status.stage_request
  if (request && request.approvals) {
    const intersection = stage.reviewers.filter(x =>
      request.approvals.find(y => y.email === x.email && y.strategy === x.strategy)
    )
    if (intersection.length >= stage.minimumApprovals) {
      return
    }
  }
  hookResult.actions = []
}
