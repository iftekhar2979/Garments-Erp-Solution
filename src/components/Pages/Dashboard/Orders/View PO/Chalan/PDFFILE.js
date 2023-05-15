import React from "react";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
// import LebronStretch from "../photos/lebron_transparent.png";
import logo from '../../../../../../Assets/Pad-Print.png'

const styles = StyleSheet.create({
  body: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    margin: 5,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 8,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  det:{marginLeft:10},
  flex:{display:'flex',justifyContent:'space-between'},
  table: { 
    display: "table", 
    width: "auto", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderRightWidth: 0, 
    borderBottomWidth: 0 
  }, 
  tableRow: { 
    margin: "auto", 
    flexDirection: "row" 
  }, 
  tableCol: { 
    width: "25%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0 
  }, 
  tableCell: { 
    margin: "auto", 
    marginTop: 5, 
    fontSize: 10 
  }
  
});

const PDFFile = () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>

        
         
        <Image style={styles.image} src={logo}></Image>
        
        <div style={styles.det}>
           <Text style={styles.text}>COMPANY NAME : </Text>
          <Text style={styles.text}>COMPANY LOCATION : </Text>
          <Text style={styles.text}>BUYER NAME : </Text>
          <Text style={styles.text}>PRODUCT NAME : </Text>
          <Text style={styles.text}>RANGE : </Text>
          <Text style={styles.text}>TB NO : </Text>
          <Text style={styles.text}>CHALAN NO : </Text>
       <Text style={styles.text}>Date : </Text>
        </div>
            
          
        <div style={styles.title}><Text style={styles.title}>Delivery Details</Text></div>
  <hr/>
  
  <View style={styles.table}> 
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Product</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Type</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Period</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Price</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>React-PDF</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>3 User </Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>2019-02-20 - 2020-02-19</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>5€</Text> 
          </View> 
        </View> 
      </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;