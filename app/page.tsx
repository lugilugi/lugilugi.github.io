import { Slide, SlideImage, pos } from "@/components/Slide";
import { asset } from "@/lib/asset";

/*
 * Each <Slide> reproduces one 1920×1080 slide from the Canva deck "Cuansing Portfolio".
 * Boxes are [left, top, width, height] in slide pixels, copied from Canva.
 */

export default function Home() {
  return (
    <main>
      {/* ============ Slide 1 — Title ============ */}
      <Slide className="s1" aria-label="About">
        <SlideImage box={[836.25, 43.28, 1083.75, 993.44]} src="/images/s1-board.jpg" alt="EMH-IMUC-REV-01 board render" />
        <h1 className="el name" style={pos([76.59, 216.5, 891.11, 402.92])}>Luigi Cuansing</h1>
        <p className="el t37" style={pos([100.1, 625, 935.74, 44.54])}>BS Computer Engineering at De La Salle University</p>
        <div className="el rule" style={pos([100.1, 694.54, 817.59, 3])} />
        <p className="el t28" style={pos([100.1, 722.54, 863.14, 33.41])}>Embedded Systems, PCB Design, Board Bringup</p>
        <p className="el t28" style={pos([100.1, 761.94, 863.14, 33.41])}>
          <a href="mailto:luigicuansing@gmail.com">luigicuansing@gmail.com</a> |{" "}
          <a href="tel:+639569935877">+63 956 993 5877</a> | Metro Manila
        </p>

        <a className="el social" style={pos([102.1, 862.48, 250, 80.95])} href="https://github.com/lugilugi"
          target="_blank" rel="noopener" aria-label="GitHub: lugilugi">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="ico" src={asset("/images/s1-github.png")} alt="" />
          <span className="t37">lugilugi</span>
        </a>
        <a className="el social" style={pos([447.16, 862.48, 380, 80.95])} href="https://www.linkedin.com/in/luigicuansing"
          target="_blank" rel="noopener" aria-label="LinkedIn: luigicuansing">
          <span className="li">in</span>
          <span className="t37">luigicuansing</span>
        </a>
      </Slide>

      {/* ============ Slide 2 — FOC ============ */}
      <Slide aria-labelledby="h-foc">
        <h2 id="h-foc" className="el h" style={pos([108, 108, 1829.72, 127.6])}>Modular FOC Motor Controller</h2>
        <p className="el t33" style={pos([108, 235.6, 1658.94, 85.32])}>
          Switching from legacy trapezoidal motor control to Field-Oriented Control (FOC) while also allowing
          flexibility for gate driver type and controller. Powering a Shell Eco-Marathon Electric Drive.
        </p>
        <SlideImage box={[108, 401.77, 781.12, 585.84]} src="/images/s2-a.jpg" alt="FOC motor controller assembled on heatsink" />
        <SlideImage box={[908.54, 401.77, 474.16, 292.92]} src="/images/s2-b.jpg" alt="Controller and power stage boards on the bench" />
        <SlideImage box={[908.54, 722.19, 474.16, 265.42]} src="/images/s2-c.jpg" alt="PCB renders of the modular boards" />
        <div className="el t24" style={pos([1426.83, 401.77, 415.18, 589.15])}>
          <p><b>Power-Loop &amp; Layout Optimization</b> 4-layer stackup with tight DC-bus decoupling and isolated board-to-board partitioning to suppress switching ringing.</p>
          <p><b>Gate-Drive Strength Tuning</b> Evaluated gate-drive currents, dead-time margins, and slew-rate resistors via oscilloscope phase measurements.</p>
          <p><b>Modular Power-Stage Swapping</b> Standardized logic header allows rapid testing of different MOSFET topologies and shunt configurations without respinning the MCU board.</p>
        </div>
      </Slide>

      {/* ============ Slide 3 — Vehicle ============ */}
      <Slide aria-labelledby="h-veh">
        <h2 id="h-veh" className="el h" style={pos([108, 108, 1829.72, 127.6])}>Vehicle Electrical Overhaul</h2>
        <p className="el t33" style={pos([108, 235.6, 1658.94, 85.32])}>
          Transitioning from point-to-point wiring to a distributed CAN/TWAI architecture, cutting harness mass by
          1.5 kg while improving trackside serviceability and data collection
        </p>
        <SlideImage box={[144.28, 360.74, 362.47, 271.85]} src="/images/s3-a.jpg" alt="CAN node wiring" />
        <SlideImage box={[602.44, 360.74, 583.07, 271.85]} src="/images/s3-b.jpg" alt="In-vehicle telemetry dashboard" />
        <SlideImage box={[1281.2, 360.74, 494.52, 271.85]} src="/images/s3-c.jpg" alt="Telemetry hardware on the bench" />
        <SlideImage box={[147.4, 662.28, 491.12, 308.12]} src="/images/s3-d.jpg" alt="CAN bus architecture diagram" />
        <div className="el t23" style={pos([688.62, 660.68, 315.59, 311.32])}>
          <p><b>CAN Bus Architecture</b>Architected a modular vehicle electrical overhaul using a reusable ESP-IDF CAN/TWAI component and a versioned DBC protocol, cutting wiring-harness mass by ~1.5 kg and improving system serviceability.</p>
        </div>
        <div className="el t23" style={pos([1041.89, 660.68, 335.08, 311.32])}>
          <p><b>&nbsp;Cloud MQTT Pipeline</b>Engineered a fault-tolerant telemetry pipeline using local SQLite buffering and MQTT outage replay (via Mosquitto, Telegraf, TimescaleDB, and Grafana) for live remote monitoring and post-run analysis.</p>
        </div>
        <div className="el t23" style={pos([1414.31, 660.68, 361.07, 248.14])}>
          <p><b>In-Vehicle Telemetry App</b>Built a Flutter/Android application featuring CAN-over-USB data ingestion, GPS integration, lap tracking, driver alerts, and real-time vehicle performance visualization on the cloud.</p>
        </div>
      </Slide>

      {/* ============ Slide 4 — GPS + UWB ============ */}
      <Slide aria-label="NEO-M9V GPS and UWB Equipment Tracking System">
        <div className="el vrule" style={pos([940.13, 171.81, 3, 739.02])} />

        <h2 className="el h" style={pos([108, 108, 777.66, 127.6])}>NEO-M9V GPS</h2>
        <p className="el t24" style={pos([108, 235.6, 770.04, 61.19])}>
          4-Layer Controlled-Impedance Breakout Board PCB Adapted from the Adafruit NEO-M9N Reference Design for Local BOM &amp; DFM
        </p>
        <SlideImage box={[108, 318.41, 332.67, 282.83]} src="/images/s4-a.jpg" alt="Assembled NEO-M9V GPS board" />
        <div className="el t23" style={pos([473.45, 323.47, 431.97, 251.43])}>
          <p><b>50 Ω Controlled-Impedance Routing</b>Selected a controlled-impedance 4-layer JLCPCB stackup with exact prepreg dielectric thickness and copper weight and recalculated the coplanar waveguide with ground trace width and ground-plane clearance from the NEO-M9V RF_IN pin to the antenna.</p>
        </div>
        <div className="el t23" style={pos([108, 684.24, 385.02, 219.42])}>
          <p><b>SWaP Optimization &amp; DFM BOM Substitution</b>Re-specified all capacitors, inductors, resistors for SWaP and local assembly availability, achieving a 60% cost reduction over the reference breakout board.</p>
        </div>
        <SlideImage box={[523.16, 667.22, 382.26, 282.83]} src="/images/s4-b.jpg" alt="GPS board layout" />

        <h2 className="el h h96" style={pos([1044.13, 99.67, 768.4, 207.05])}>UWB Equipment Tracking System</h2>
        <p className="el t24" style={pos([1044.13, 306.71, 770.04, 127.19])}>
          Qorvo DWM3001C Uplink TDoA Tag with active coin-cell power conditioning (Nexperia NBM7100A) (35 mm × 35 mm × 8 mm
          fully assembled), and Wirelessly Synchronized (sub 1 ns) Anchors (Ongoing Thesis)
        </p>
        <SlideImage box={[1044.13, 465.54, 332.92, 187.99]} src="/images/s4-c.jpg" alt="UWB tag next to a coin" />
        <div className="el t21" style={pos([1410.52, 487.75, 412.56, 143.56])}>
          <p><b>TX Burst Energy &amp; Capacitor Sizing</b>Calculated per-blink UWB energy demands and sized NBM7100A storage capacitors with DC-bias derating margins to prevent coin-cell voltage droop.</p>
        </div>
        <div className="el t20" style={pos([1044.13, 711.98, 405.05, 163.94])}>
          <p><b>Front-End Hardening &amp; RF Keep-Out</b>Integrated reverse-polarity and ESD protection on a compact 4-layer stackup, enforcing strict antenna keep-out clearances around the DWM3001C to preserve radiation patterns.</p>
        </div>
        <SlideImage box={[1442.38, 667.22, 186.49, 184.61]} src="/images/s4-d.jpg" alt="UWB tag render, front" />
        <SlideImage box={[1637.79, 727.42, 185.29, 183.42]} src="/images/s4-e.jpg" alt="UWB tag render, back" />
      </Slide>
    </main>
  );
}
