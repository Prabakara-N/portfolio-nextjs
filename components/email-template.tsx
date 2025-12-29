import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  message,
}: ContactEmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from {name} via your portfolio</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Heading style={logo}>Prabakaran Dev</Heading>
            <Text style={tagline}>Portfolio Contact Form</Text>
          </Section>

          <Hr style={divider} />

          {/* Main Content */}
          <Section style={content}>
            <Heading as="h2" style={title}>
              New Contact Message
            </Heading>
            <Text style={subtitle}>
              You have received a new message from your portfolio website.
            </Text>

            {/* Sender Info Card */}
            <Section style={infoCard}>
              <Row>
                <Column>
                  <Text style={label}>From</Text>
                  <Text style={value}>{name}</Text>
                </Column>
              </Row>
              <Row style={{ marginTop: "12px" }}>
                <Column>
                  <Text style={label}>Email</Text>
                  <Text style={emailValue}>{email}</Text>
                </Column>
              </Row>
            </Section>

            {/* Message Card */}
            <Section style={messageCard}>
              <Text style={messageLabel}>Message</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from your portfolio contact form at{" "}
              <span style={highlight}>prabakarandev.in</span>
            </Text>
            <Text style={timestamp}>
              Received on {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const header = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const logo = {
  color: "#10b981",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0",
  letterSpacing: "-0.5px",
};

const tagline = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "8px 0 0 0",
};

const divider = {
  borderColor: "#1f2937",
  margin: "20px 0",
};

const content = {
  padding: "20px 0",
};

const title = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 8px 0",
};

const subtitle = {
  color: "#9ca3af",
  fontSize: "16px",
  margin: "0 0 24px 0",
};

const infoCard = {
  backgroundColor: "#111827",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "16px",
  border: "1px solid #1f2937",
};

const label = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "500",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px 0",
};

const value = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
};

const emailValue = {
  color: "#10b981",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
};

const messageCard = {
  backgroundColor: "#111827",
  borderRadius: "12px",
  padding: "20px",
  border: "1px solid #1f2937",
  borderLeft: "4px solid #10b981",
};

const messageLabel = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "500",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 12px 0",
};

const messageText = {
  color: "#e5e7eb",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const footerText = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "0 0 8px 0",
};

const highlight = {
  color: "#10b981",
  fontWeight: "500",
};

const timestamp = {
  color: "#4b5563",
  fontSize: "12px",
  margin: "0",
};

export default ContactEmailTemplate;
