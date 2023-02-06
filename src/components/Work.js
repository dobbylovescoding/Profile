import styles from "./Work.module.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function Work() {
  return (
    <div className={styles.cont}>
      <div className={styles.cont1}>
        <div className={styles.h1}>Career Timeline</div>
      </div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2008-2012</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>YMCA Waiwera/Adair</div>
            <div classname={styles.p}>
              I started off with the YMCA as a volunteer and then progressed in
              to a paid position. This role left me in charge of planning
              outdoor activities including but not limited to rock climbing,
              hiking, kayaking, high ropes, archery and team building exercises.
              I also spent the summer of 2011 working at YMCA Camp Becket in
              Massachusetts.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2012-2017</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>
              RNZAF Logistics (training and work experience)
            </div>
            <div classname={styles.p}>
              During this time in the Air Force I was a junior and a lot of the
              work I did was related to warehousing through various different
              areas and bases of the Air Force. This included managing
              daily/weekly reports, stocktaking, customer service, material
              transfers, stock issuing and general projects.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2018-2019</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>
              RNZAF Logistics (promotion to the rank of Corporal)
            </div>
            <div classname={styles.p}>
              I was now given the responsibility of looking after the parts for
              one of the C-130 Hercules that was going through long-term
              scheduled maintenance along with the supervision of 3-5 staff
              depending on what stage juniors were at in their career
              progression. The role included parts procurement, liaising with
              technicians, purchasers and overseas vendors, inventory
              management, MRP and reporting on and supervising junior staff.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2019-2021</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>RNZAF Air Movements</div>
            <div classname={styles.p}>
              This time was spent as a shift supervisor at originally the
              Wellington Air Movements section and then the Auckland Air
              Movements section. This included freight and team management,
              consolidation of RNZAF and Foreign military freight, co-ordination
              of staff training, weight and balance calculations for
              passenger/cargo aircraft and management of dangerous goods
              transport by air.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2021-2022</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>NZDF Operation Antarctica</div>
            <div classname={styles.p}>
              For this deployment I was based in Christchurch for 6 months as a
              team leader where I was responsible for a team that assisted in
              shipping freight down to Antarctica on the US Air Force C-17
              Globemasters. This role was similar to my previous Air Movements
              position but with the added stress of being in very time sensitive
              and fast paced environment.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2022</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>RNZAF Air Movements Passenger Clerk</div>
            <div classname={styles.p}>
              I spent the last 6 months of my career in a very admin heavy
              office based role. This included managing all the bookings and
              passenger requests for Air Force flights, admin tasks related to
              said bookings, liaising directly with other government and
              military organisations and the training of junior staff in
              passenger related tasks.
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="white">
            <div className={styles.date}>2022-2023</div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className={styles.h2}>Studying Software Development</div>
            <div classname={styles.p}>
              I left the Air Force in mid 2022 to study software development and
              coding with particular interest in front-end web development. If
              you have any positions or possible career opportunities you would
              like to discuss with me please feel free to email me via the form
              found on the contact page.
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
