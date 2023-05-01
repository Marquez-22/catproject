import { Texto } from "../Texto"

type InformacionType = "inf1"


interface InformacionProps {
    type?: InformacionType

}

export const Informacion = ({ type = "inf1" }: InformacionProps) => {
    return (<>
        <div className={`informacion ${type}`}>
            <Texto type='titulo1'>
                Amazing Article
            </Texto>
            <Texto type='texto2'>
                Florin Pop
            </Texto>
            <Texto type='texto1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum libero ea voluptas ex dolor unde! Sint magnam a quam cum non dignissimos molestias animi inventore magni voluptatibus id explicabo modi quidem quos facere quibusdam aperiam est, commodi odio dolor eveniet repellat ut itaque. Optio, ex eveniet consequuntur facere provident animi iusto impedit soluta! At explicabo obcaecati totam et dolores. Fugiat, mollitia quasi? Quis nam unde hic dolorum sint, qui ab sequi laborum eos vel beatae perspiciatis dolor, quisquam soluta itaque nobis ex quasi fugit dicta explicabo commodi, suscipit dolores facere adipisci. Explicabo tenetur maiores totam provident nesciunt dolore reiciendis expedita deserunt assumenda officiis. Mollitia non ex incidunt tenetur ea deserunt doloremque vel minima, et perspiciatis distinctio repellendus animi consequatur rerum sequi temporibus quam magnam quia accusamus. Placeat labore, dignissimos temporibus soluta recusandae debitis excepturi accusantium qui ullam facere. Blanditiis quo sequi ex doloribus repellendus a et ipsam fugit aliquam.
            </Texto>
            <Texto type='titulo2'>
                My cat
            </Texto>
            <div className="Contentimages">
                <img src="/images/filo.png"></img>
                <img src="/images/nucita.png"></img>
            </div>
            <Texto type='texto1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste sint magni libero molestias quas, in officiis, consequuntur iure odio, laborum id necessitatibus rerum quaerat pariatur? Mollitia velit, voluptate nemo eligendi officia fuga hic laboriosam! Assumenda minus, explicabo nisi soluta et est, error esse omnis sunt, quos sed harum. Veritatis, cumque! Dicta maxime labore est, delectus voluptatum suscipit, vero magnam deleniti sed dolorem, accusamus non beatae itaque rem! Molestiae, quam veritatis modi commodi illum perferendis minus ullam officiis, reiciendis aperiam assumenda asperiores eius, nulla explicabo. Nesciunt, rerum unde vel ducimus error voluptatem placeat consequatur tenetur reprehenderit necessitatibus reiciendis expedita aliquam. Ducimus, asperiores autem esse, ipsum voluptate voluptatum quos maxime recusandae nisi tenetur nostrum eum neque beatae dolor nobis vel cum molestias voluptatibus. Nobis blanditiis harum autem laudantium ea officiis, culpa corporis nihil. Fugit accusamus aut magnam, officiis eligendi quae doloremque, non eaque quaerat sunt beatae voluptatum quos voluptates laudantium eveniet.
            </Texto>





        </div>



    </>)
}