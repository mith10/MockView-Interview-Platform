import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import './Practice.css';

function TopicCard({ title, topics }) {
  const [open, setOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
   <div className="topic-card">
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button
          variant="primary"
          onClick={() => {
            setOpen(!open);
            if (!open) {
              setSelectedTopic(null);
            } else {
              setSelectedTopic(null);
            }
          }}
        >
          {open ? 'Hide Topics' : 'View Topics'}
        </Button>
        <Collapse in={open}>
          <div className="mt-2">
            {topics.map((topic, index) => (
              <a
                key={index}
                href="#"
                onClick={() => handleTopicClick(topic)}
                className={`topic-link ${open ? 'open' : ''}`}
              >
                <span className="topic-arrow">›</span>{' '}
                <span className="topic-name">{topic}</span>
                <span className={`topic-toggle-arrow ${open ? 'open' : ''}`}></span>
              </a>
            ))}
          </div>
        </Collapse>
        {selectedTopic && <TopicContent topic={selectedTopic} />}
      </Card.Body>
    </Card>
   </div>
  );
}

const topicContent = {
  "Time and Work":
    "Time and work problems involve calculating the time taken to complete a task when multiple people or machines work together. To solve these problems, you need to understand the concept of work rate and how it applies to different scenarios.",
  "Time and Distance":
    "Time and distance problems involve calculating the time taken to travel a certain distance or the distance covered in a certain time. To solve these problems, you need to understand the relationship between speed, time, and distance (Speed = Distance / Time).",
  "Profit and Loss":
    "Profit and loss problems involve calculating the profit or loss made in a business transaction. To solve these problems, you need to understand the concepts of cost price, selling price, profit percentage, and loss percentage.",
  Trees:
    "Trees are a type of data structure that represents hierarchical relationships between data elements. In a tree, each node can have multiple child nodes, and there is a single root node that has no parent. Common tree operations include traversal, insertion, deletion, and searching.",
  Graphs:
    "Graphs are a type of data structure that represents relationships between objects. In a graph, nodes (also called vertices) are connected by edges. Graphs can be directed or undirected, and they can be weighted or unweighted. Common graph operations include traversal, searching, and finding the shortest path between nodes.",
  "Computer Networks":
    "Computer networks are interconnected systems of computers and other devices that communicate with each other. Computer networks can be classified based on their size, topology, and communication protocols. Understanding computer networks involves learning about network hardware, network architectures, and network protocols such as TCP/IP.",
  "Operating Systems":
    "Operating systems are software programs that manage computer hardware resources and provide a platform for running applications. Operating systems perform tasks such as process management, memory management, file system management, and device management. Common operating systems include Windows, macOS, Linux, and Android.",
};

function TopicContent({ topic }) {
  return (
    <Card.Text style={{ marginTop: '1rem' }}>{topicContent[topic]}</Card.Text>
  );
}

export default function App() {
  const aptitudeTopics = ["Time and Work", "Time and Distance", "Profit and Loss"];
  const dsaTopics = ["Trees", "Graphs"];
  const csFundamentalsTopics = ["Computer Networks", "Operating Systems"];

  return (
    <div>
      <h1>Practice</h1> {/* Page Heading */}
      <div className="d-flex flex-row justify-content-center">
        <TopicCard title="Aptitude" topics={aptitudeTopics} />
        <TopicCard title="DSA" topics={dsaTopics} />
        <TopicCard title="CS Fundamentals" topics={csFundamentalsTopics} />
      </div>
    </div>
  );
}
