import photoTita from '../Tita.png'

const MemoriamPage = () => {


    return (
        <div className='memoriamContainer'>
            
            <h3>In Loving Memory</h3>

            <img src={photoTita} alt="tribute" style={{width: "300px"}}/>

            <h3>Serenidad Sarsadias Mabuti</h3>
            <h4>Nov. 23, 1951 - Dec. 11, 2022</h4>

            <p>
                This website was created in honor of my late Aunt and Godmother who fought breast cancer for several years.
            </p>

        </div>
    );
}

export default MemoriamPage;