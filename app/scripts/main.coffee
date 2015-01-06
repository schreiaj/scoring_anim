binHeight = 70
toteHeight = 30
litterHeight = 30


window.stacks = stacks = [
]
for tote in d3.range(1,7)
  stacks.push({totes: tote, bins: 0, litter: 0, score: 2*tote + 4*0 + 6*0})
  stacks.push({totes: tote, bins: 1, litter: 0, score: 2*tote + 4*tote + 6*0})
  stacks.push({totes: tote, bins: 1, litter: 1, score: 2*tote + 4*tote + 6})



width = 1000/(stacks.length)

stacks = d3.select("svg").selectAll(".stack").data(stacks)
  .enter().append("g").attr("score", (d) -> d.score).attr("transform", (d,i) -> "translate(#{i * width},300)")
stacks.selectAll(".tote").data((d) -> d3.range(0,d.totes)).enter().append("use").attr("y", (d,i) -> (i+1)*-toteHeight).attr("xlink:href", "#tote")
stacks.selectAll(".litter").data((d) -> d3.range(0,d.litter)).enter().append("use").attr("y", (d,i) -> (d3.select(this.parentElement).datum().totes + 1) * -toteHeight - binHeight*.55).attr("xlink:href", "#litter")
stacks.selectAll(".bin").data((d) -> d3.range(0,d.bins)).enter().append("use").attr("y", (d,i) -> (d3.select(this.parentElement).datum().totes + 1) * -toteHeight ).attr("xlink:href", "#bin")
stacks.append("text").text((d) -> d.score).attr("x", width/2)
