import Job from "./Job";
const Jobs = () => {
  return (
    <main>
      <Job
        title={"Full Time Sales Associate - Sydney Boutique"}
        contracType={"CDI"}
        country={"Australie"}
        city={"Sydney"}
        className={"red"}
      />
      <Job
        title={"Agent de Sécurité - Pantin"}
        contracType={"CDI"}
        country={"France"}
        city={"Pantin"}
        className={"yellow"}
      />
      <Job
        title={"Responsable d'Atelier (H/F)"}
        contracType={"CDD"}
        country={"France"}
        city={"Paris"}
        className={"green"}
      />
      <Job
        title={"Chef de Projets"}
        contracType={"CDD"}
        country={"France"}
        city={"Paris"}
        className={"blue"}
      />
      <Job
        title={"Développeur React.js"}
        contracType={"CDI"}
        country={"France"}
        city={"Paris"}
        className={"pink"}
      />
      <Job
        title={"Sales Associate Stockholm"}
        contracType={"CDI"}
        country={"Suède"}
        city={"Stockholm"}
        className={"red"}
      />
      <Job
        title={"Vendeur/se - Crans Montana"}
        contracType={"CDI"}
        country={"Suisse"}
        city={"Crans-Montana"}
        className={"yellow"}
      />
      <Job
        title={"CRM & Data Quality Analyst"}
        contracType={"CDI"}
        country={"USA"}
        city={"New-york"}
        className={"green"}
      />
      <Job
        title={"Infirmier (H/F)"}
        contracType={"CDI"}
        country={"France"}
        city={"Pantin"}
        className={"blue"}
      />
    </main>
  );
};

export default Jobs;
