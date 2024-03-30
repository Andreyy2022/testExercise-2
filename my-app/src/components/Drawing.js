function Drawing() {
    const styleCyrc = {
        fill: 'transparent',
        stroke: 'black',
    }

    const r1 = 150; // радиус
    const amountOfPoints1 = 10; // количество точек
    let x1, y1;
    const arr1 = [];
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints1){
        x1 = 700 + r1 * Math.sin(i);
        y1 = 400 + r1 * Math.cos(i);
        arr1.push(<circle cx={x1} cy={y1} r={10} style={styleCyrc}  />);
    }

    const r2 = 300; // радиус
    const amountOfPoints2 = 29; // количество точек
    let x2, y2;
    const arr2 = [];
    for(let i = 0; i < Math.PI * 2; i += Math.PI * 2 / amountOfPoints2){
        x2 = 700 + r2 * Math.sin(i);
        y2 = 400 + r2 * Math.cos(i);
        arr2.push(<circle cx={x2} cy={y2} r={10} style={styleCyrc}  />);
    }

    return (
        <svg viewBox='0 0 1100 1100' width='1100' heigth='1100'>
            <circle classID='circle1' cx={700} cy={400} r={150} style={styleCyrc}  />
            {arr1}
            <circle classID='circle1' cx={700} cy={400} r={300} style={styleCyrc}  />
            {arr2}
        </svg>
    );
}

export default Drawing;