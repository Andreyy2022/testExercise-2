
function Drawing() {
    const styleCyrc = {
        fill: 'transparent',
        stroke: 'black',
    }

    const r1 = 150; 
    const amountOfPoints1 = 10; 
    let x1, y1;
    const arr1 = [];
    let j1 = 0;
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints1){
        j1++;
        x1 = 700 + r1 * Math.sin(i);
        y1 = 400 + r1 * Math.cos(i);
        arr1.push(<circle className={'littleInCircle' + j1} key={i} cx={x1} cy={y1} r={10} /*style={styleCyrc}*/  />);
    }

    const r2 = 300; 
    const amountOfPoints2 = 29; 
    let x2, y2;
    const arr2 = [];
    let j2 = 0;
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints2){
        j2++;
        x2 = 700 + r2 * Math.sin(i);
        y2 = 400 + r2 * Math.cos(i);
        arr2.push(<>
            <circle className={'littleOutCircle' + j2} key={i} cx={x2} cy={y2} r={10} /*style={styleCyrc}*/  />
            <text className={'textOut' + j2} x={x2 + 50 * Math.sin(i) } y={y2 + 50 * Math.cos(i) }>text</text>    
        </>
        );
    }

    return (
        <div>
            <div className='TS'>text SVG</div>
            <svg viewBox='0 0 1100 1100' width='1100' heigth='1100' >
                <circle className='circle1' cx={700} cy={400} r={150} style={styleCyrc}  />
                {arr1}
                <circle  className='circle2' cx={700} cy={400} r={300} style={styleCyrc}  />
                {arr2}
            </svg>
        </div>
    );
}

export default Drawing;