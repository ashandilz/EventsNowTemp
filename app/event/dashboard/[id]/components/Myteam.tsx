import React from "react";
import Container from "./Container";
import TeamMemberCard from "./TeamMemberCard";

export default function Myteam() {
  function handleInvite() {
    console.log("Invite button clicked");
  }
  return (
    <div>
      <Container>
        <div className="pl-10 mb-5 grid gap-2 mt-8 mr-10 pb-8">
          <div className=" font-mono text-custom-orange font-medium text-3xl ">
            MY TEAM
          </div>
          <div className=" text-[#455273] font-mono mr-8">
            Experience the power of collaborating by easily inviting your team
            members and assigning roles
          </div>
          <div className="flex py-4">
            <input
              type="text"
              placeholder="Search by email ... "
              className="  focus:outline-custom-orange border-2 rounded-lg pl-4 pr-16 placeholder:text-[#ABB7C2] placeholder:font-Inter placeholder:text-base placeholder:font-normal"
            />
            <button
              className="bg-custom-orange rounded-md ml-12 py-1 text-white font-mono text-base font-normal px-4 drop-shadow-md"
              onClick={handleInvite}
            >
              Invite
            </button>
          </div>
          <div className="mt-12 grid gap-5">
            <TeamMemberCard
              name="ashan dilsara"
              email="ashandilsara8@gmail.com"
            />
            <TeamMemberCard
              name="ashan dilsara"
              email="ashandilsara8@gmail.com"
            />
            <TeamMemberCard
              name="ashan dilsara"
              email="ashandilsara8@gmail.com"
            />
            <TeamMemberCard
              name="ashan dilsara"
              email="ashandilsara8@gmail.com"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}