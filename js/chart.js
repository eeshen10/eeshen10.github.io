
const PlotlyColors = {
'bg': '#0B0B0F',
'card_bg': '#16171B',
'font_color': '#C3C3C3',
'grid_color': '#878787',
// Transformers
'd1d2':'#35B4D8',
'd1': '#2FE6D9',
'd2': '#429AF8',
'pd': '#EE5757',
't1': '#D5F178',
't2': '#DCA132',
't3': '#DC661A',
'dt': '#CE6EFF',
'nofault':"#A5A5A5",

// Scatterpoint color
'point':'#E20500',
}

function dga3d(ch4_h2,c2h4_c2h6,c2h2_c2h4){
    // no 0 values because diagram starts from 0.05, 0.005 - for proper log scaling
    var ch4_h2=Math.max(Number(ch4_h2),0.05);
    var c2h4_c2h6=Math.max(Number(c2h4_c2h6),0.05);
    var c2h2_c2h4=Math.max(Number(c2h2_c2h4),0.005);
    // extend the log maximum value if values are >10
    var max_ch4_h2=Math.max(10,ch4_h2+0.02);
    var max_c2h4_c2h6=Math.max(10,c2h4_c2h6+0.02);
    var max_c2h2_c2h4=Math.max(10,c2h2_c2h4+0.002);
    x=[ch4_h2];
    y=[c2h4_c2h6];
    z=[c2h2_c2h4];
    var traces1 = [
                   {name:'PD - Partial Discharge',
                    type: 'mesh3d',
                    showlegend:false,
                    x:[0.05, 0.05, 0.05, 0.05, 0.1, 0.1, 0.1, 0.1],
                    y:[0.05, 0.05, 0.2, 0.2, 0.05, 0.05, 0.2, 0.2],
                    z:[0.005, 0.01, 0.01, 0.005, 0.005, 0.01, 0.01, 0.005],
                    i:[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j:[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k:[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    opacity:0.85,
                    color:PlotlyColors['pd'],
                    flatshading:true},

                   {name:'D1 - Low Energy Discharges',
                    type: 'mesh3d',
                    showlegend:false,
                    x:[0.1, 0.1, 0.1, 0.1, 0.5, 0.5, 0.5, 0.5],
                    y:[1, max_c2h4_c2h6, max_c2h4_c2h6, 1, 1, max_c2h4_c2h6, max_c2h4_c2h6, 1],
                    z:[1, 1, max_c2h2_c2h4, max_c2h2_c2h4, 1, 1, max_c2h2_c2h4, max_c2h2_c2h4],
                    i:[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j:[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k:[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    opacity:0.85,
                    color:PlotlyColors['d1'],
                    flatshading:true},

                    {name:'D2 - High Energy Discharges',
                    type: 'mesh3d',
                    showlegend:false,
                    x:[0.1, 0.1, 0.1, 0.1, 1, 1, 1, 1],
                    y:[2, max_c2h4_c2h6, max_c2h4_c2h6, 2, 2, max_c2h4_c2h6, max_c2h4_c2h6, 2],
                    z:[0.6, 0.6, 2.5, 2.5, 0.6, 0.6, 2.5, 2.5],
                    i:[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j:[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k:[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    opacity:0.85,
                    color:PlotlyColors['d2'],
                    flatshading:true},

                    {name:'T1 - Thermal Fault < 300 Degree Celsius',
                    type: 'mesh3d',
                    showlegend:false,
                    x:[1, 1, 1, 1, max_ch4_h2, max_ch4_h2, max_ch4_h2, max_ch4_h2],
                    y:[0.05, 1, 1, 0.05, 0.05, 1, 1, 0.05],
                    z:[0.005, 0.005, 0.01, 0.01, 0.005, 0.005, 0.01, 0.01],
                    i:[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j:[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k:[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    opacity:0.85,
                    color:PlotlyColors['t1'],
                    flatshading:true},

                    {name:'T2 - Thermal Fault 300 - 700 Degree Celsius',
                    type: 'mesh3d',
                    showlegend:false,
                    x:[1, 1, 1, 1, max_ch4_h2, max_ch4_h2, max_ch4_h2, max_ch4_h2],
                    y:[1, 4, 4, 1, 1, 4, 4, 1],
                    z:[0.005, 0.005, 0.1, 0.1, 0.005, 0.005, 0.1, 0.1],
                    i:[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j:[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k:[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    opacity:0.85,
                    color:PlotlyColors['t2'],
                    flatshading:true},

                    {name:'T3 - Thermal Fault > 700 Degree Celsius',
                    type: 'mesh3d',
                    showlegend:false,
                    x:[1, 1, 1, 1, max_ch4_h2, max_ch4_h2, max_ch4_h2, max_ch4_h2],
                    y:[4, max_c2h4_c2h6, max_c2h4_c2h6, 4, 4, max_c2h4_c2h6, max_c2h4_c2h6, 4],
                    z:[0.005, 0.005, 0.2, 0.2, 0.005, 0.005, 0.2, 0.2],
                    i:[7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
                    j:[3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
                    k:[0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
                    opacity:0.85,
                    color:PlotlyColors['t3'],
                    flatshading:true},

                    {x:x,
                    y:y,
                    z:z,
                    mode:'markers',
                    type:'scatter3d',
                    marker:{color:PlotlyColors['point'], size:10, line:{color:'Black', width:2}},
                    line_color: PlotlyColors['bg'],
                    opacity:1},

                ];
                //console.log(DGAval1)
    var layout1 = {
                    autosize:true,
                    //width: '100%',
                    //height: '100%',
                    hovermode: false,
                    paper_bgcolor:'rgb(0,0,0,0)',
                    plot_bgcolor:'rgb(0,0,0,0)',
                    font: {'color': PlotlyColors['font_color']},
                    margin:{l:0, r:0, b:0, t:0, pad:0},
                    scene:{
                      //xaxis_title:'CH4/H2',
                      //yaxis_title:'C2H4/C2H6',
                      //zaxis_title:'C2H2/C2H4',
                      xaxis:{title:'CH4/H2', tickvals:[0.1, 0.5, 1.0],
                                 backgroundcolor:PlotlyColors['bg'],
                                 showgrid:true,
                                 gridcolor:PlotlyColors['grid_color'],
                                 showbackground:true,
                                 type:'log',
                                 mirror:true,
                                 showline:true,
                                 range:[Math.log10(0.05), Math.log10(10)]
                                 },
                      yaxis:{title:'C2H4/C2H6',tickvals:[0.1, 0.2, 1.0, 2.0, 4.0],
                                 backgroundcolor:PlotlyColors['bg'],
                                 showgrid:true,
                                 gridcolor:PlotlyColors['grid_color'],
                                 showbackground:true,
                                 type:'log',
                                 mirror:true,
                                 showline:true,
                                 range:[Math.log10(0.05), Math.log10(10)]
                                 },
                      zaxis:{title:'C2H2/C2H4',tickvals:[0.01, 0.1, 0.2, 0.6, 1.0, 2.5],
                                 backgroundcolor:PlotlyColors['bg'],
                                 showgrid:true,
                                 gridcolor:PlotlyColors['grid_color'],
                                 showbackground:true,
                                 type:'log',
                                 mirror:true,
                                 showline:true,
                                 range:[Math.log10(0.005), Math.log10(10)]
                                 },
                        }
                };

                Plotly.newPlot('dga3dplot', traces1, layout1);
                };
dga3d(1,1,1);
setInterval(()=>{
	x=Math.random() * (10 - 0) + 0;
	y=Math.random() * (10 - 0) + 0;
	z=Math.random() * (10 - 0) + 0;
	dga3d(x,y,z);
}, 10000);


