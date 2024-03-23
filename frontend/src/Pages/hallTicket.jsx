import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from '../hooks/useAuthContext'
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white", // Change background color to white
    color: "black"
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  timetableContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayColumn: {
    flex: 1,
    marginRight: 10,
  },
  timeColumn: {
    width: 60,
  },
  cell: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'BLACK',
  },
  headerCell: {
    backgroundColor: '#3c3c3c',
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
  },
  timetableText: {
    color: 'blACK',
  },
});

function BasicDocument() {
    const { user } = useAuthContext()
     const email = user && user.email ? user.email : "Sanskar";

  // Sample timetable data
  const timetableData = [
    { day: 'Monday', time: '9:00-11:00 AM', subject: 'Computer Networks' },
    { day: 'Tuesday', time: '9:00-11:00 AM', subject: 'Operating Systems' },
    { day: 'Wednesday', time: '9:00-11:00 AM', subject: 'Software Engineer' },
    { day: 'Thursday', time: '9:00-11:00 AM', subject: 'DBMS' },
    { day: 'Friday', time: '9:00-11:00 AM', subject: 'Web Development' },
    { day: 'Saturday', time: '9:00-11:00 AM', subject: 'Data Structures' },
    // Add more timetable data as needed
  ];

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
       <Page size="A4" style={[styles.page, styles.centerPage]}>
  {/* Student Info */}
  <div><View style={styles.section}>
    <Text style={{ fontSize: 16, marginBottom: 10 }}>Email:{email}</Text>
    <Text style={{ fontSize: 16 }}>Registration No: 221078878</Text>
  </View>
  <View>
    <img src="https://seeklogo.com/images/V/vjti-college-logo-707F46CDA8-seeklogo.com.png"></img>
  </View>
  </div>
  

  {/* Timetable section */}
  <View style={[styles.section, styles.timetableContainer]}>
    {/* Day columns */}
    <View style={styles.dayColumn}>
      <View style={[styles.cell, styles.headerCell]}>
        <Text style={styles.headerText}>Time</Text>
      </View>
      {timetableData.map((item, index) => (
        <View key={index} style={styles.cell}>
          <Text style={styles.timetableText}>{item.time}</Text>
        </View>
      ))}
    </View>
    {/* Day column */}
    <View style={styles.dayColumn}>
      <View style={[styles.cell, styles.headerCell]}>
        <Text style={styles.headerText}>Day</Text>
      </View>
      {timetableData.map((item, index) => (
        <View key={index} style={styles.cell}>
          <Text style={styles.timetableText}>{item.day}</Text>
        </View>
      ))}
    </View>
    {/* Subject column */}
    <View style={styles.dayColumn}>
      <View style={[styles.cell, styles.headerCell]}>
        <Text style={styles.headerText}>Subject</Text>
      </View>
      {timetableData.map((item, index) => (
        <View key={index} style={styles.cell}>
          <Text style={styles.timetableText}>{item.subject}</Text>
        </View>
      ))}
    </View>
  </View>
</Page>
      </Document>
    </PDFViewer>
  );
}

export default BasicDocument;
