import img1 from "../blog-image-1.jpeg"
import img2 from "../blog-image-2.jpeg"
export default function Main() {
    return (
        <main>
            <article>
                <p class="date"> 11/12/20 </p>
                <h2>On the Street in Brooklyn</h2>
                <img src={img1} alt="image1" />
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magnam qui laborum
                    porro asperiores
                    perferendis sint commodi quasi distinctio itaque explicabo maxime saepe at ducimus, quis, tempora
                    blanditiis delectus reiciendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius,
                    asperiores ab debitis aliquid nesciunt a dolores? Repudiandae accusamus, molestias atque, quidem
                    perspiciatis dolorem adipisci, ducimus quibusdam autem provident Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nulla, quaerat voluptates repellendus rerum libero adipisci at ipsam quidem qui quod
                    ullam facere numquam! Ut fuga obcaecati eum adipisci repellat! Illo?Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Libero iste veniam distinctio necessitatibus pariatur perspiciatis at ab
                    expedita nihil quod, aliquid deleniti quia accusamus placeat ex delectus velit. Amet, aperiam.</p>
                <a href="" class="continued">Continues....</a>
            </article>
            <article>
                <p class="date"> 11/11/20 </p>
                <h2>Vintage in Vogue</h2>
                <img src={img2} alt="image2" />
                <p class="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, cum eos accusantium
                    sapiente aliquam
                    delectus, quod ratione, adipisci error esse provident deserunt accusamus ea odit doloremque facere
                    minima possimus repudiandae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                    praesentium voluptates voluptatibus impedit molestiae dolorem nam fuga deleniti est eligendi consequatur
                    quibusdam vel, eveniet, quos modi porro. Voluptatibus, expedita vel. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Soluta ipsum doloribus consequatur non iusto ipsam architecto quos
                    consequuntur, tempore delectus facere, veniam exercitationem pariatur autem sed tempora eligendi ullam
                    ratione?</p>
                <a href="" class="continued">Continues....</a>
            </article>

        </main>
    );
}