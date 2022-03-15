import "./StatisticHome.css";
function StatisticHome(props) {
  return (
    <div class="panel" style={{ width: "100%" }}>
      <div class="panel-header">
        <h3 class="title">Statistics</h3>
      </div>

      <div class="panel-body">
        <div class="categories">
          <div class="category">
            <span>Users</span>
            <span>{props.user}</span>
          </div>
          <div class="category">
            <span>Clincs</span>
            <span>{props.clinic}</span>
          </div>
          <div class="category">
            <span>Clinics&Users</span>
            <span>{props.total}</span>
          </div>
        </div>

        <div class="chart">
          <div class="operating-systems">
            <span class="ios-os">
              <span></span>iOS
            </span>
            <span class="android-os">
              <span></span>Android
            </span>
          </div>

          {/* <!--    Place the stats numbers here    --> */}
          <div class="android-stats">
            {props.android}
            <span></span>
          </div>
          <div class="ios-stats">
            <span></span>
            {props.ios}
          </div>
          {/* <!--   Place the SVG here     --> */}
          <svg
            width="100%"
            height="204"
            class="data-chart"
            viewBox="0 0 563 204"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                class="dataset-1"
                d="M30.046 97.208c2.895-.84 5.45-2.573 7.305-4.952L71.425 48.52c4.967-6.376 14.218-7.38 20.434-2.217l29.447 34.46c3.846 3.195 9.08 4.15 13.805 2.52l31.014-20.697c4.038-1.392 8.485-.907 12.13 1.32l3.906 2.39c5.03 3.077 11.43 2.753 16.124-.814l8.5-6.458c6.022-4.577 14.563-3.676 19.5 2.056l54.63 55.573c5.622 6.526 15.686 6.647 21.462.258l37.745-31.637c5.217-5.77 14.08-6.32 19.967-1.24l8.955 7.726c5.42 4.675 13.456 4.63 18.82-.11 4.573-4.036 11.198-4.733 16.508-1.735l61.12 34.505c4.88 2.754 10.916 2.408 15.45-.885L563 90.915V204H0v-87.312-12.627c5.62-.717 30.046-6.852 30.046-6.852z"
                fill="#7DC855"
                opacity=".9"
              />
              <path
                class="dataset-3"
                d="M0 155.59v47.415c0 .55.448.995 1 .995h562v-43.105l-40.286 11.83c-3.127.92-6.493.576-9.368-.954l-53.252-28.32c-5.498-2.924-12.323-1.365-15.987 3.654l-25.48 34.902c-4.08 5.59-12.478 5.513-16.455-.148L360.06 121.92c-2.802-4.073-8.2-5.457-12.633-3.237L322.2 133.827c-4.415 2.21-9.792.848-12.604-3.196L282.78 99.25c-4.106-5.906-12.978-5.6-16.665.57l-26.757 44.794c-3.253 5.446-10.753 6.468-15.36 2.092l-16.493-15.673c-4.27-4.058-11.138-3.522-14.72 1.148l-23.167 30.21c-3.722 4.852-10.937 5.207-15.12.744l-44.385-47.345c-5.807-5.427-14.83-5.508-20.734-.19l-55.76 48.31c-3.76 3.26-9.127 3.93-13.582 1.703L0 155.59z"
                fill="#F5A623"
                opacity=".7"
              />
              <path
                class="lines"
                fill="#FFF"
                opacity=".2"
                d="M0 203h563v1H0zM0 153h563v1H0zM0 102h563v1H0zM0 51h563v1H0zM0 0h563v1H0z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StatisticHome;
