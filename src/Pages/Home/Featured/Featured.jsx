import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import featureimg from "../../../assets/home/featured.jpg";
import './featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTittle
                subHeading="Check It Out"
                heading="Featured Item"
            ></SectionTittle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-70 pb-20 pt-12 px-36">
                <div>
                    <img src={featureimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug, 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum modi libero minus praesentium illum? Dignissimos, unde deserunt in expedita ullam totam nisi voluptatem illum laudantium eligendi magni, eos a fugit voluptatibus necessitatibus aspernatur ea dolore repellendus laborum libero? Autem, consequuntur iste. Nobis nostrum debitis possimus placeat, ducimus at minima.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;