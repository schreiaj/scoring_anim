(function(){var a,b,c,d,e,f,g,h,i;for(a=70,e=30,b=30,window.stacks=c=[],i=d3.range(1,7),g=0,h=i.length;h>g;g++)d=i[g],c.push({totes:d,bins:0,litter:0,score:2*d+0+0}),c.push({totes:d,bins:1,litter:0,score:2*d+4*d+0}),c.push({totes:d,bins:1,litter:1,score:2*d+4*d+6});f=1e3/c.length,c=d3.select("svg").selectAll(".stack").data(c).enter().append("g").attr("score",function(a){return a.score}).attr("transform",function(a,b){return"translate("+(b+1)*f+",300)"}),c.selectAll(".tote").data(function(a){return d3.range(0,a.totes)}).enter().append("use").attr("y",function(a,b){return(b+1)*-e}).attr("xlink:href","#tote"),c.selectAll(".litter").data(function(a){return d3.range(0,a.litter)}).enter().append("use").attr("y",function(){return(d3.select(this.parentElement).datum().totes+1)*-e-.55*a}).attr("xlink:href","#litter"),c.selectAll(".bin").data(function(a){return d3.range(0,a.bins)}).enter().append("use").attr("y",function(){return(d3.select(this.parentElement).datum().totes+1)*-e}).attr("xlink:href","#bin"),c.append("text").text(function(a){return a.score}).attr("x",f/2)}).call(this);