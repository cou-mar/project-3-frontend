import photoTita from '../Tita.png'

const MemoriamPage = () => {


    return (
        <div className='memoriamContainer'>
            
            <span className='memoriamImg'>
                <h3>in Loving Memory of</h3>
            <br />
                <img src={photoTita} alt="tribute" style={{width: "300px"}}/>
            <br />
                <h3>Serenidad Sarsadias Mabuti</h3>
                <h4>Nov. 23, 1951 - Dec. 11, 2022</h4>
            </span>
            <span className='memoriamText'>
                <p>
                    This website was created in honor of my late Aunt who fought breast cancer for several years. She brought everyone together and never failed to document each moment. She truly was the heart of our family and the life of all our parties. Out of all my mom's sisters, she's the one I was most like in terms of personality; I'm so proud of that. 
                </p>
            <br />
                <p>
                    My Tita, my Ninang, my party partner — <br />
                    I love you. I miss you. This is for you.
                </p>
            </span>

        </div>
    );
}

export default MemoriamPage;