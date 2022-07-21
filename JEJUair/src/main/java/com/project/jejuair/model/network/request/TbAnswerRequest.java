package com.project.jejuair.model.network.request;

import com.project.jejuair.model.enumclass.common.Check;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TbAnswerRequest {
    private Long ansIdx;
    private String ansInquiryContent;
    private String ansUserid;
    private Check ansAnswerCheck;
    private String ansAnswerContent;
    private LocalDateTime ansInquiryRegDate;
    private LocalDateTime ansAnswerRegDate;
    private Long ansMemIdx;
}
