import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-for-papers',
  templateUrl: './call-for-papers.component.html',
  styleUrls: ['./call-for-papers.component.scss']
})
export class CallForPapersComponent implements OnInit {

  topicLists = [
    "Cellular Networks",
    "Sensing and Sensor Networks",
    "Geographic information systems",
    "Cloud Networking",
    "Signal processing",
    "Virtualization",
    "Machine to Machine (M2M)",
    "Cognitive Radio",
    "Body Area Networks",
    "Satellite and Optical Communication",
    "Internet of Things",
    "Intelligent Agents",
    "Smart Grids",
    "Smart Cities",
    "Agents and Multi-agent Systems",
    "Assistive Technologies",
    "Affective computing",
    "Intelligent transportation",
    "Context-aware pervasive systems",
    "Emergency and safety systems",
    "Embedded Systems",
    "Robotics",
    "Mobile and wireless security",
    "Biometric security",
    "Intrusion Detection",
    "Database security",
    "Cryptography",
    "Access control",
    "Denial of service protection",
    "Information hiding",
    "Monitoring and surveillance",
    "Privacy and data protection",
    "Cloud Computing",
    "Quantum Computing",
    "Grid Computing",
    "High Performance Computing",
    "Parallel Computing",
    "Distributed Computing",
    "Multimedia Systems and Services",
    "Human-centric Computing",
    "Ubiquitous Computing",
    "Bioinformatics and Bio-Inspired Computing",
    "Social Computing",
    "Behavioral Science",
    "Mobile Adhoc Networks",
    "Open Spectrum Solutions",
    "Software defined networking",
    "Network mobility management",
    "Routing Protocols",
    "Antennas and propagation",
    'MIMO advances',
    "Game Theory",
    "QoS and Scheduling",
    "Vehicular Networks",
    "Mobile Adhoc Networks",
    "Open Spectrum Solutions",
    "Software defined networking",
    "Network mobility management",
    "Routing Protocols",
    "Antennas and propagation",
    "MIMO advances",
    "Game Theory",
    "QoS and Scheduling",
    "Vehicular Networks"
  ]
  constructor() { }

  ngOnInit() {
  }

}
