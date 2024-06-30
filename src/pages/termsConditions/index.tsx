import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TermsConditions = () => {
  return (
    <Container maxWidth="xl">
      <div>
        <div
          className={` single-popular  rounded-[20px]  bg-[Popular1] overflow-hidden h-[500px] relative`}
          style={{
            backgroundImage: `url('/assets/image5.jpg')`,
            backgroundSize: "cover",
            // backgroundPosition: "",
          }}
        >
          <div className="overlay h-full bg-[#00000075] absolute z-1 top-0  left-0 w-full"></div>
          <div className="absolute md:left-[45%] top-1/2">
            <h1 className="text-3xl font-bold mb-6 text-white ">
              الشروط والاحكام
            </h1>
          </div>
        </div>
      </div>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          الشروط والأحكام
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">مقدمة</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              هذه هي شروط وأحكام استخدام الموقع الخاص بنا. باستخدام هذا الموقع،
              فإنك توافق على هذه الشروط والأحكام بالكامل.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">استخدام الموقع</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              يمكنك استخدام موقعنا فقط للأغراض المشروعة. لا يجوز لك استخدام
              موقعنا بأي طريقة قد تسبب أو قد تسبب ضررًا للموقع أو تعطيل إتاحته
              أو إمكانية الوصول إليه.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6">حقوق الملكية الفكرية</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              جميع حقوق الملكية الفكرية في الموقع والمواد الموجودة على الموقع
              مملوكة لنا أو مرخصة لنا.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="h6">تعديلات</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              قد نقوم بتحديث هذه الشروط والأحكام من وقت لآخر. سنقوم بإعلامك بأي
              تغييرات من خلال نشر الشروط الجديدة على موقعنا.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography variant="h6">الاتصال بنا</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يمكنك الاتصال بنا
              عبر البريد الإلكتروني على info@edura.com.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default TermsConditions;
