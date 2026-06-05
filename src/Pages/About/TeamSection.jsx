import TeamCard from "../../Component/Ui/TeamCard";
function TeamSection () {
    
    return (
        <>
         <section className="py-5 alt-bg border-top border-bottom prime-border" >
        <div className="container-fluid">
            <div className="row g-4 py-2">
                <TeamCard/>
            </div>
        </div>
    </section> 
        </>
    );
}
export default TeamSection;