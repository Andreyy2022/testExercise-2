
function Drawing({nameSkills}) {
    const styleCirc = {
        fill: 'transparent',
        stroke: "grey", 
    }
/*
    const styleTextIn = {
        display: 'block',
        width: '20px',
        wordWrap: 'break-word',
    }
*/
    const r1 = 140; 
    const amountOfPoints1 = 10; 
    let x1, y1;
    const arr1 = [];
    let j1 = 0;
    let k1 = -1;
    for(let i = Math.PI * 2; i > 0; i -= Math.PI * 2 / amountOfPoints1) {
        j1++;
        k1++;
        x1 = 700 - r1 * Math.sin(i);
        y1 = 400 - r1 * Math.cos(i);
        arr1.push(<>
            <circle className={'littleInCircle' + j1} key={i} cx={x1} cy={y1} r={13} fill='grey' fillOpacity='0.7' />
            <text className={'textOut' + j1} x={700 - 250 * Math.sin(i) + 45 * Math.sin(i) - 60}
             y={400 - 250 * Math.cos(i) + 45 * Math.cos(i)} /*style={styleTextIn}*/>{nameSkills[k1].name}</text>
        </>);
    }

    const r2 = 285; 
    const amountOfPoints2 = 29; 
    let x2, y2;
    const arr2 = [];
    let j2 = 0;
    let k2 = -1;
    for(let i = Math.PI * 2; i > 0; i -= Math.PI * 2 / amountOfPoints2) {
        j2++;
        k2++;
        x2 = 700 - r2 * Math.sin(i);
        y2 = 400 - r2 * Math.cos(i);
        arr2.push(<>
            <circle className={'littleOutCircle' + j2} key={i} cx={x2} cy={y2} r={13} fill='orange' fillOpacity='0.6' />
            <text className={'textOut' + j2} x={700 - 380 * Math.sin(i) + 50 * Math.sin(i) - 17} 
             y={400 - 380 * Math.cos(i) + 50 * Math.cos(i)}>{'text' + k2}</text>    
        </>
        );
    }

    return (
        <div>
            <svg viewBox='0 0 1100 1100' width='1100' heigth='1100' >
                <circle className='circle1' cx={700} cy={400} r={140} strokeWidth="3" strokeOpacity='0.6' style={styleCirc} />
                {arr1}
                <circle  className='circle2' cx={700} cy={400} r={285} strokeWidth="3" strokeOpacity='0.6' style={styleCirc} />
                {arr2}
            </svg>
        </div>
    );
}

export default Drawing;