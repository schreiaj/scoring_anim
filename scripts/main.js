(function(){var a,b,c,d,e,f,g,h,i,j,k,l;for(b=70,h=30,d=30,a=60,window.stacks=f=[],l=d3.range(1,7),j=0,k=l.length;k>j;j++)g=l[j],f.push({totes:g,bins:0,litter:0,score:2*g+0+0}),f.push({totes:g,bins:1,litter:0,score:2*g+4*g+0}),f.push({totes:g,bins:1,litter:1,score:2*g+4*g+6});i=1e3/f.length,e=d3.scale.ordinal().domain(f.map(function(a){return a.score}).sort(function(a,b){return a-b})).rangePoints([0,900]),c=d3.scale.linear().domain([0,f.length]).range([0,900]),f=d3.select("svg").selectAll(".stack").data(f).enter().append("g").attr("score",function(a){return a.score}).attr("transform",function(a,b){return"translate("+c(b)+",300)"}),f.selectAll(".tote").data(function(a){return d3.range(0,a.totes)}).enter().append("use").attr("y",function(a,b){return(b+1)*-h}).attr("xlink:href","#tote"),f.selectAll(".litter").data(function(a){return d3.range(0,a.litter)}).enter().append("use").attr("y",function(){return(d3.select(this.parentElement).datum().totes+1)*-h-.55*b}).attr("xlink:href","#litter"),f.selectAll(".bin").data(function(a){return d3.range(0,a.bins)}).enter().append("use").attr("y",function(){return(d3.select(this.parentElement).datum().totes+1)*-h}).attr("xlink:href","#bin"),f.append("text").text(function(a){return a.score}).attr("x",i/2),window.orderByScore=function(){return d3.selectAll("g").transition().duration(a).delay(function(b,c){return a*c}).attr("transform",function(a){return"translate("+(e(a.score)+45*a.bins+45*a.litter)+",300)"})},window.orderByIndex=function(){return d3.selectAll("g").transition().duration(a).delay(function(b,c){return a*c}).attr("transform",function(a,b){return"translate("+c(b)+",300)"})}}).call(this);